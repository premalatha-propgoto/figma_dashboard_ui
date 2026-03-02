import React from "react";
import "./Taskitem.css";

import playIcon from "../assets/play.png";
import linkIcon from "../assets/link.png";
import commentIcon from "../assets/comments.png";
import reminderIcon from "../assets/Reminder.png";
import clockIcon from "../assets/clock.png";
export default function Taskitem({
  time,
  title,
  link,
  comments,
  progress,
  active,
}) {
  return (
    <div className={`task-card ${active ? "task-active" : ""}`}>
      <div className="task-left">
        <div className="task-play">
          <img src={playIcon} alt="play" />
        </div>
        <div className="task-meta">
          <p className="start-label">Start from</p>
          <div className="time-row">
            <img src={clockIcon} alt="clock" />
            <span>{time}</span>
          </div>
        </div>
        <div className="task-center">
          <h4>{title}</h4>
          <div className="task-info-row">
            <img src={linkIcon} alt="link" />
            <a href={link} target="_blank" rel="noreferrer">
              {link.replace("https://", "")}
            </a>
            <img src={commentIcon} alt="comments" className="comment-icon" />
            <span>{comments} comments</span>
          </div>
        </div>
      </div>
      <div className="task-right">
  <div className="progress-section">
    <span className="progress-text">{progress}% complete</span>
    <div className="progress-row">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <button className="reminder-btn">
        <img src={reminderIcon} alt="reminder" />
        Reminder
      </button>
    </div>
  </div>
</div>
    </div>
  );
}