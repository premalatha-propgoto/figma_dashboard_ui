import "./RightPanel.css";
import React, { useState } from "react";
import Modal from "./Modal";

import gridIcon from "../assets/Group 21.svg";
import calendarIcon from "../assets/calender.svg";
import callIcon from "../assets/call.png";

import p1 from "../assets/profile 1.png";
import p2 from "../assets/profile 2.png";
import p3 from "../assets/profile 3.png";

import user1 from "../assets/profile 1.png";
import user2 from "../assets/profile 2.png";
import user3 from "../assets/profile 3.png";
import user4 from "../assets/profile 4.png";

function RightPanel({ projects = [] }) {
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [openTaskModal, setOpenTaskModal] = useState(false);

  const scrollEmojis = (amount) => {
    const container = document.getElementById("emojiScroll");
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="right-panel">
      <div className="schedule-header">
        <h3>Today's Schedule</h3>
        <div className="schedule-icons">
          <img src={gridIcon} alt="grid" />
          <img src={calendarIcon} alt="calendar" />
        </div>
      </div>

      <p className="schedule-sub">30 minute call with Client</p>

      <div className="schedule-title-row">
        <h4>Project Discovery Call</h4>
        <span className="invite">+ Invite</span>
      </div>

      <div className="call-card">
        <div className="call-left">
          <div className="profile-group">
            <img src={p1} alt="" />
            <img src={p2} alt="" />
            <img src={p3} alt="" />
            <div className="profile-count">R</div>
          </div>
          <span className="call-time">28:35</span>
        </div>

        <div className="call-right">
          <img src={callIcon} alt="call" />
          <button className="more-btn">⋮</button>
        </div>
      </div>

      <hr />

      <h3 className="section-title">Messages</h3>

      <div className="message-item">
        <img src={user1} alt="" />
        <div>
          <h5>Cris Morich</h5>
          <p>Hi Angelina! How are You?</p>
        </div>
      </div>

      <div className="message-item">
        <img src={user2} alt="" />
        <div>
          <h5>Charmie</h5>
          <p>Do you need that design?</p>
        </div>
      </div>

      <div className="message-item">
        <img src={user3} alt="" />
        <div>
          <h5>Jason Mandala</h5>
          <p>What is the price of hourly...</p>
        </div>
      </div>
      <div className="message-item">
        <img src={user4} alt="" />
        <div>
          <h5>Charlie Chu</h5>
          <p>Awsome design!!</p>
        </div>
      </div>
      <div className="button-row">
        <div
          className="project-button"
          onClick={() => setOpenProjectModal(true)}
        >
          <div className="project-btn">Create Project</div>
        </div>
        <div className="task-button" onClick={() => setOpenTaskModal(true)}>
          <div className="task-btn">Create Task</div>
        </div>
      </div>
      <div className="emoji-wrapper">
        <button
          className="arrow-btn left-arrow"
          onClick={() => scrollEmojis(-100)}
        >
          ‹
        </button>

        <div id="emojiScroll" className="emoji-container">
          <span>😍</span>
          <span>😎</span>
          <span>🤩</span>
          <span>😊</span>
          <span>😇</span>
          <span>🥳</span>
          <span>😌</span>
          <span>😉</span>
          <span>😄</span>
        </div>

        <button
          className="arrow-btn right-arrow"
          onClick={() => scrollEmojis(100)}
        >
          ›
        </button>
      </div>

      <p className="collab-title">Add Collaborators</p>

      <div className="collab-row">
        <div className="collab-chip purple">
          <img src={p1} alt="" />
          Angela ✕
        </div>

        <div className="collab-chip blue">
          <img src={p2} alt="" />
          Chris ✕
        </div>

        <div className="add-btn">+</div>
        <button className="arrow-btn-right-arrow">›</button>
      </div>
      <Modal
        isOpen={openProjectModal}
        onClose={() => setOpenProjectModal(false)}
        title="Create Project"
      >
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const name = e.target.name.value;
            const description = e.target.description.value;

            const created_by = localStorage.getItem("user_id");

            if (!created_by) {
              alert("User not logged in");
              return;
            }

            const projectData = {
              name,
              description,
              created_by,
            };

            await fetch("http://localhost:5000/api/create_projects", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(projectData),
            });

            setOpenProjectModal(false);
          }}
        >
          <label>Name</label>
          <input type="text" name="name" required />

          <label>Description</label>
          <textarea name="description"></textarea>

          <button type="submit" className="close-btn">
            Create Project
          </button>
        </form>
      </Modal>

      <Modal
        isOpen={openTaskModal}
        onClose={() => setOpenTaskModal(false)}
        title="Create Task"
      >
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const title = e.target.title.value;
            const description = e.target.description.value;
            const start_time = e.target.start_time.value;
            const end_time = e.target.end_time.value;

            if (!title) {
              alert("Task title is required");
              return;
            }

            const taskData = {
              title,
              description,
              start_time,
              end_time,
            };

            try {
              const res = await fetch(
                "http://localhost:5000/api/create_tasks",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(taskData),
                },
              );

              const data = await res.json();

              if (res.ok) {
                alert("Task created successfully");
                setOpenTaskModal(false);
              } else {
                alert(data.message || "Failed to create task");
              }
            } catch (error) {
              console.error("Error creating task:", error);
            }
          }}
        >
          <label>Title</label>
          <input type="text" name="title" required />

          <label>Description</label>
          <textarea name="description"></textarea>

          <label>Start Time</label>
          <input type="datetime-local" name="start_time" />

          <label>End Time</label>
          <input type="datetime-local" name="end_time" />

          <label>Project</label>
          <select name="project" required>
            {projects.length > 0 ? (
              projects.map((p) => (
                <option key={p.title} value={p.title}>
                  {p.name}
                </option>
              ))
            ) : (
              <option disabled>No projects available</option>
            )}
          </select>

          <button type="submit" className="close-btn">
            Create Task
          </button>
        </form>
      </Modal>
    </div>
  );
}
export default RightPanel;
