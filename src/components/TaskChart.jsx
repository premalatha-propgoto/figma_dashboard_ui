"use client";

import { useState } from "react";
import { ChartContainer } from "./chart";
import "./TaskChart.css";
const monthlyData = [
  { month: "May", New: 100, Completed: 50 },
  { month: "Jun", New: 110, Completed: 200 },
  { month: "Jul", New: 200, Completed: 50 },
  { month: "Aug", New: 300, Completed: 380 },
  { month: "Sep", New: 90, Completed: 250 },
  { month: "Oct", New: 220, Completed: 180 },
  { month: "Nov", New: 40, Completed: 260 },
  { month: "Dec", New: 60, Completed: 180 },
  { month: "Jan", New: 140, Completed: 310 },
  { month: "Feb", New: 80, Completed: 210 },
  { month: "Mar", New: 160, Completed: 160 },
  { month: "Apr", New: 120, Completed: 50 },
];
function TaskChart() {
  const [active, setActive] = useState("Monthly");
  return (
    <div className="task-chart">
      <div className="chart-header">
        <h3>Task Done</h3>
        <div className="chart-tabs">
          {["Daily", "Weekly", "Monthly"].map((tab) => (
            <span
              key={tab}
              onClick={() => setActive(tab)}
              className={active === tab ? "active" : ""}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
      <ChartContainer data={monthlyData} height={300} />
    </div>
  );
}
export default TaskChart;
