import { useState } from "react";
import "./Sidebar.css";

import logo from "../assets/Group 10.png";
import dashboardIcon from "../assets/Group 1.png";
import taskIcon from "../assets/Group 3.png";
import bookIcon from "../assets/Group 4.png";
import settingsIcon from "../assets/Group 5.png";
import sendIcon from "../assets/Group 6.png";
import fileIcon from "../assets/Group 7.png";

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
