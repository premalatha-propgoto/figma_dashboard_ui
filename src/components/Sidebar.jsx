import { useState } from "react";
import "./Sidebar.css";

import logo from "../assets/Group 10.svg";
import dashboardIcon from "../assets/Group 1.svg";
import taskIcon from "../assets/Group 3.svg";
import bookIcon from "../assets/Group 4.svg";
import settingsIcon from "../assets/Group 5.svg";
import sendIcon from "../assets/Vector.svg";
import fileIcon from "../assets/Group 7.svg";

function Sidebar() {
  const [active, setActive] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", icon: dashboardIcon },
    { id: "task", icon: taskIcon },
    { id: "book", icon: bookIcon },
    { id: "settings", icon: settingsIcon },
    { id: "send", icon: sendIcon },
    { id: "file", icon: fileIcon },
  ];

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="menu">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`menu-item ${active === item.id ? "active" : ""}`}
          >
            <img src={item.icon} alt={item.id} className="menu-icon" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
