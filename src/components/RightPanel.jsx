import "./RightPanel.css";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Snackbar from "./Snackbar";

import gridIcon from "../assets/Group 21.svg";
import calenderInactive from "../assets/calenderInactive.svg";
import callIcon from "../assets/call.png";
import calenderActive from "../assets/calenderActive.svg";
import gridActive from "../assets/Group 1.svg";

import projectIcon from "../assets/info.png";
import Avatar from "../components/Avatar";
function RightPanel({ projects = [], fetchProjects, fetchTasks }){
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [openTaskModal, setOpenTaskModal] = useState(false);

  const [showProjectList, setShowProjectList] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "success",
    sx: { zIndex: 2000 },
  });

  const [activeIcon, setActiveIcon] = useState("calendar");
  const scrollEmojis = (amount) => {
    const container = document.getElementById("emojiScroll");
    if (container) {
      container.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const handleCalendarClick = () => {
    setActiveIcon("calendar");
    setShowProjectList(false);

    const today = new Date().toISOString().split("T")[0];
    let endingProjects = [];
    let endingTasks = [];

    projects.forEach((project) => {
      if (project.end_date) {
        const projectEnd = project.end_date.split("T")[0];
        if (projectEnd === today) {
          endingProjects.push({
            type: "Project",
            name: project.name,
            end: project.end_date,
          });
        }
      }

      if (project.tasks && project.tasks.length > 0) {
        project.tasks.forEach((task) => {
          if (task.end_time) {
            const taskEnd = task.end_time.split("T")[0];
            if (taskEnd === today) {
              endingTasks.push({
                type: "Task",
                name: task.title,
                end: task.end_time,
              });
            }
          }
        });
      }
    });
  };

  const handleGridClick = () => {
    setActiveIcon("grid");
    setShowProjectList(true);
    setSelectedProject(null);
  };
  const [users, setUsers] = useState([]);
  const [showInviteDropdown, setShowInviteDropdown] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log("Calling API...");

        const res = await fetch("http://localhost:5000/api/user_list", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });

        console.log("Response status:", res.status);

        if (!res.ok) {
          throw new Error("API not found or server error");
        }

        const data = await res.json();

        console.log("USER DATA:", data);

        setUsers(data.user || []);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchUsers();
  }, []);
  const messages = [
  "Let's complete the task today!",
  "Please check the latest update.",
  "Client meeting scheduled soon.",
  "Don't forget to review the document.",
  "New task assigned to you.",
  "Great work on the project!",
  "Let's discuss the next milestone.",
  "Reminder: submit the report.",
  "We need to finalize the design.",
  "Call me when you're free."
];

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

  return (
    <div className="right-panel">
      <div className="schedule-header">
        <h3>Today's Schedule</h3>

        <div className="schedule-icons">
          <img
            src={activeIcon === "grid" ? gridActive : gridIcon}
            alt="grid"
            onClick={handleGridClick}
          />

          <img
            src={activeIcon === "calendar" ? calenderActive : calenderInactive}
            alt="calendar"
            onClick={handleCalendarClick}
          />
        </div>
      </div>

      {showProjectList ? (
        <div className="project-list-box">
          <h4>Projects</h4>

          {projects.length > 0 ? (
            projects.map((project) => (
              <div
                key={project.project_id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-icon">
                  <img src={projectIcon} alt="project" />
                </div>

                <div className="project-content">
                  <h5 className="project-title">{project.name}</h5>
                  <p className="project-desc">
                    {project.description || "No description"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div>No projects available</div>
          )}
        </div>
      ) : (
        <>
          <p className="schedule-sub">30 minute call with Client</p>

          <div className="schedule-title-row">
            <h4>Project Discovery Call</h4>
            <span
              className="invite"
              onClick={() => setShowInviteDropdown(!showInviteDropdown)}
            >
              + Invite
            </span>
            {showInviteDropdown && (
              <div className="invite-card">
                {users.length === 0 ? (
                  <p className="no-users">No users found</p>
                ) : (
                  users.map((user) => (
                    <div
                      key={user.user_id}
                      className="invite-user"
                      onClick={() => {
                        setSnackbar({
                          open: true,
                          message: `${user.full_name} invited successfully`,
                          type: "success",
                        });

                        setShowInviteDropdown(false);
                      }}
                    >
                      {user.full_name}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          <div className="call-card">
            <div className="call-left">
              <div className="profile-group">
                <Avatar
                  name="Prema"
                  style={{ width: "30px", height: "30px" }}
                />
                <Avatar
                  name="Joo"
                  style={{ width: "30px", height: "30px" }}
                />
                <Avatar
                  name="Priya"
                  style={{ width: "30px", height: "30px" }}
                />
                <Avatar name="R" style={{ width: "30px", height: "30px" }} />
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

         {["Prema", "Joo", "Priya", "Raji"].map((user, i) => (
  <div className="message-item" key={i}>
    <Avatar name={user} size={50} />

    <div>
      <h5>{user}</h5>
      <p>{getRandomMessage()}</p>
    </div>
  </div>
))}
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
              <span>🔥</span>
              <span>💼</span>
              <span>🚀</span>
            </div>
            <button
              className="arrow-btn right-arrow"
              onClick={() => scrollEmojis(100)}
            >
              ›
            </button>
          </div>

          <hr />

          <p className="collab-title">Add Collaborators</p>

          <div className="collab-row">
            <div className="collab-chip purple">
              <Avatar name="Prema" size={24} /> Prema ✕
            </div>

            <div className="collab-chip blue">
              <Avatar name="Joo" size={24} /> Joo ✕
            </div>

            <div className="add-btn">+</div>

            <button className="arrow-btn-right-arrow">›</button>
          </div>
        </>
      )}

      <Modal
        isOpen={openProjectModal}
        onClose={() => setOpenProjectModal(false)}
        title="Create Project"
      >
        {" "}
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const name = e.target.name.value;
            const description = e.target.description.value;
            const created_by = localStorage.getItem("user_id");

            if (!created_by) {
              setSnackbar({
                open: true,
                message: "User not logged in",
                type: "error",
              });
              return;
            }

            const projectData = {
              name,
              description,
              created_by,
            };

            try {
              const res = await fetch(
                "http://localhost:5000/api/create_projects",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(projectData),
                },
              );

              if (res.ok) {
                setSnackbar({
                  open: true,
                  message: "Project created successfully",
                  type: "success",
                });
                 fetchProjects();
                setOpenProjectModal(false);
              } else {
                setSnackbar({
                  open: true,
                  message: "Failed to create project",
                  type: "error",
                });
              }
            } catch (error) {
              setSnackbar({
                open: true,
                message: "Server error while creating project",
                type: "error",
              });
            }
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
        {" "}
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const title = e.target.title.value;
            const description = e.target.description.value;
            const start_time = e.target.start_time.value;
            const end_time = e.target.end_time.value;
            const url = e.target.url.value;
            if (!title) {
              setSnackbar({
                open: true,
                message: "Task title is required",
                type: "error",
              });
              return;
            }

            const taskData = {
              title,
              description,
              start_time,
              end_time,
              url,
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
                setSnackbar({
                  open: true,
                  message: "Task created successfully",
                  type: "success",
                });
                fetchTasks();
                setOpenTaskModal(false);
              } else {
                setSnackbar({
                  open: true,
                  message: data.message || "Failed to create task",
                  type: "error",
                });
              }
            } catch (error) {
              setSnackbar({
                open: true,
                message: "Server error while creating task",
                type: "error",
              });
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

          <label> Url</label>
          <input type="text" name="url" />

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
      <Snackbar
        open={snackbar.open}
        message={snackbar.message}
        type={snackbar.type}
        onClose={() =>
          setSnackbar({ open: false, message: "", type: "success" })
        }
      />
    </div>
  );
}

export default RightPanel;
