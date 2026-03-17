"use client";

import { useState, useEffect } from "react";
import { ChartContainer } from "./chart";
import "./TaskChart.css";

function TaskChart() {
  const [temperatureData, setTemperatureData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const CITY_NAME = "Chennai";
    const API_KEY = "16ac75e67e49906f8534a15e56c6a1c5";

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&units=metric&cnt=12&appid=${API_KEY}`)
      .then(res => {
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json();
      })
      .then(data => {
        const tempData = data.list.map(item => ({
          date: new Date(item.dt_txt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          Temperature: item.main.temp,
        }));
        setTemperatureData(tempData);
        setLoading(false);
      })
      .catch(err => {
        console.error("API failed:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading temperature data...</div>;

  return (
    <div className="task-chart" style={{ height: "400px" }}>
      <div className="chart-header">
        <h3>Temperature Forecast</h3>
      </div>
      <ChartContainer
        data={temperatureData}
        height={300}
        dataKey="Temperature"
        xKey="date"
      />
    </div>
  );
}

export default TaskChart;