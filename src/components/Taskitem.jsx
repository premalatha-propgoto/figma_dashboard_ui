import React, { useState } from "react";
import "./Taskitem.css";
import Snackbar from "./Snackbar";

import playIcon from "../assets/Group 62.svg";
import linkIcon from "../assets/link.png";
import commentIcon from "../assets/comments.png";
import reminderIcon from "../assets/Reminder.png";
import clockIcon from "../assets/Vector (7).svg";
import verticalLine from "../assets/Rectangle 29.svg";

export default function Taskitem({ taskTime, title, link }) {

  const [showSnackbar, setShowSnackbar] = useState(false);
  const randomProgress = Math.floor(Math.random() * 101);
  const randomComments = Math.floor(Math.random() * 21);

  const handlePlayClick = () => {
    setShowSnackbar(true);
  };

  return (
    <>
      <div className="task-card">

        <div className="play-time-wrapper" onClick={handlePlayClick}>
          <div className="task-play">
            <img src={playIcon} alt="play" />
          </div>

          <div className="task-meta">
            <p className="start-label">Start from</p>
            <div className="time">
              <img src={clockIcon} alt="clock" />
              <span>{taskTime}</span>
            </div>
          </div>
        </div>
        <div className="task-center">
          <h4>{title}</h4>

          <div className="task-info-row">
            <div className="task-link">
              <img src={linkIcon} alt="link" />

              {link ? (
                <a href={link} target="_blank" rel="noreferrer">
                  {link.replace("https://", "")}
                </a>
              ) : (
                <span>-</span>
              )}
            </div>

            <img
              src={verticalLine}
              alt="separator"
              className="vertical-separator"
            />

            <div className="task-comments">
              <img src={commentIcon} alt="comments" />
              <span>{randomComments} comments</span>
            </div>
          </div>
        </div>
        <div className="progress-section">
          <span className="progress-text">
            {randomProgress}% complete
          </span>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${randomProgress}%` }}
            ></div>
          </div>
        </div>
        <div className="reminder-btn">
          <img src={reminderIcon} alt="reminder" />
          Reminder
        </div>

      </div>
      <Snackbar
        open={showSnackbar}
        message="Task started successfully!"
        type="success"
        onClose={() => setShowSnackbar(false)}
      />
    </>
  );
}   