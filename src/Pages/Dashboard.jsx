import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import RightPanel from "../components/RightPanel";
import StatsCard from "../components/StatsCard";
import Taskitem from "../components/Taskitem";
import TaskChart from "../components/TaskChart";

import "./Dashboard.css";
import icon1 from "../assets/Group 16.png";
import icon2 from "../assets/msg.png";
import icon3 from "../assets/info.png";

import graph1 from "../assets/graph1.svg";
import graph2 from "../assets/graph2.svg";
import graph3 from "../assets/graph3.svg";
function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/project_list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.projects) {
          setProjects(data.projects);
        }
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/task_list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.tasks) {
          setTasks(data.tasks);
        }
      })
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-main">
        <Topbar />

        <div className="stats-row">
          <StatsCard
            icon={icon1}
            title="Task Completed"
            number="08"
            growth="+12%"
            growthColor="green"
            graphImage={graph1}
          />

          <StatsCard
            icon={icon2}
            title="New Task"
            number="10"
            growth="+10"
            growthColor="#4ec522"
            graphImage={graph2}
          />

          <StatsCard
            icon={icon3}
            title="Projects Done"
            number="10"
            growth="+08"
            growthColor="#4ec522"
            graphImage={graph3}
          />
        </div>
        <div className="taskchart-section">
          <TaskChart />
        </div>

        <div className="task-section">
          <h3 className="task-title">Task</h3>

          {tasks.length === 0 ? (
            <p>No tasks available</p>
          ) : (
            tasks
              .filter((task) => task.is_active)
              .map((task, index) => (
                <Taskitem
                  key={task.task_id}
                  taskDate={new Date(task.start_time).toLocaleDateString()}
                  taskTime={new Date(task.start_time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  title={task.title}
                  link={task.url}
                  progress={task.status === "completed" ? 100 : 0}
                  active={index === 0}
                />
              ))
          )}
        </div>
      </div>

      <RightPanel projects={projects} />
    </div>
  );
}

export default Dashboard;
