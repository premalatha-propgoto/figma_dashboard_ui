import React from "react";
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

function Dashboard() {
  const chartData = [
    { month: "Jan", Completed: 130 },
    { month: "Feb", Completed: 0 },
    { month: "Mar", Completed: 100 },
    { month: "Apr", Completed: 150 },
    { month: "May", Completed: 80 },
    { month: "Jun", Completed: 200 },
    { month: "Jul", Completed: 120 },
  ];

  const newTask = [
    { month: "Jan", New: 170 },
    { month: "Feb", New: 50 },
    { month: "Mar", New: 0 },
    { month: "Apr", New: 160 },
    { month: "May", New: 0 },
    { month: "Jun", New: 200 },
    { month: "Jul", New: 150 },
  ];

  const projectDone = [
    { month: "Jan", Done: 8 },
    { month: "Feb", Done: 50 },
    { month: "Mar", Done: 0 },
    { month: "Apr", Done: 160 },
    { month: "May", Done: 0 },
    { month: "Jun", Done: 200 },
    { month: "Jul", Done: 120 },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
    <div className="dashboard-main">
        {/* Topbar */}
        <Topbar />
        {/* Stats Cards */}
      <div className="stats-row">
        <StatsCard
          icon={icon1}
          title="Task Completed"
          number="08"
          growth="+12%"
          growthColor="green"
          chartColor="#5051F9"
          data={chartData}
        />
        <StatsCard
          icon={icon2}
          title="New Task"
          number="10"
          growth="+10"
          growthColor="#4ec522"
          chartColor="#69ceef"
          data={newTask}
        />
        <StatsCard
          icon={icon3}
          number="10"
          growth="+08"
          chartColor="#FF614C"
          growthColor="#4ec522"
          data={projectDone}
        />
      </div>

        {/* Task Chart */}
      <div className="taskchart-section">
        <TaskChart />
      </div>

        {/* Task List */}
      <div className="task-section">
        <h3 className="task-title">Task</h3>
  
        <Taskitem
          time="9:00 am"
          title="Search Inspiration for project"
          link="https://uistore.com"
          comments={8}
          progress={24}
          active={true}
        />
        <Taskitem
          time="3:00 am"
          title="Search Inspiration for project"
          link="https://uistore.org"
          comments={5}
          progress={60}
        />
      </div>
      </div>
     
       {/* Right Panel */}
      <RightPanel />
    </div>
  );
}

export default Dashboard;