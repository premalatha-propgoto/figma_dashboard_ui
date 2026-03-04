"use client";

import { useState } from "react";
import { ChartContainer } from "./chart";
import "./TaskChart.css";
const monthlyData = [
  { month: "May", New: 60, Completed: 40 },
  { month: "Jun", New: 150, Completed: 100 },
  { month: "Jul", New: 100, Completed: 200 },
  { month: "Aug", New: 390, Completed: 300 },
  { month: "Sep", New: 260, Completed: 190 },
  { month: "Oct", New: 170, Completed: 220 },
  { month: "Nov", New: 230, Completed: 40 },
  { month: "Dec", New: 120, Completed: 60 },
  { month: "Jan", New: 300, Completed: 40 },
  { month: "Feb", New: 330, Completed: 80 },
  { month: "Mar", New: 280, Completed: 160 },
  { month: "Apr", New: 100, Completed: 120 },
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
