import React from "react";
import "./StatsCard.css";
import MiniLineChart from "./miniChart";
export default function StatsCard({
  icon,
  title,
  number,
  growth,
  growthColor,
data,
  chartColor
}) {
  return (
    <div className="stats-card">
      <div className="stats-header">
        <div className="stats-left">
          <img src={icon} alt="icon" className="stats-icon" />
          <span className="stats-title">{title}</span>
        </div>
        <span className="stats-number">{number}</span>
      </div>
      <hr className="stats-divider" />
      <div className="stats-chart-row">
<MiniLineChart
  data={data}
  height={80}
  lineColor={chartColor}
/>
  <p className="stats-growth" style={{ color: growthColor }}>
    {growth} <span className="growth-sub">more from last week</span>
  </p>
</div>
    </div>
  );
}