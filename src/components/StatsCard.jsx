import React from "react";
import "./StatsCard.css";

export default function StatsCard({
  icon,
  title,
  number,
  growth,
  growthColor,
  graphImage,
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
        <img src={graphImage} alt="graph" className="stats-graph" />

        <p className="stats-growth" style={{ color: growthColor }}>
          {growth} <span className="growth-sub">more from last week</span>
        </p>
      </div>
    </div>
  );
}
