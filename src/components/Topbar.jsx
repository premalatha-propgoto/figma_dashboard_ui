import { useState } from "react";
import "./Topbar.css";
import { useNavigate } from "react-router-dom";

import searchIcon from "../assets/search.png";
import notificationIcon from "../assets/notification.png";
import profileImage from "../assets/Group 14.png";
import arrowIcon from "../assets/arrow-down.png";

function Topbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate("/login"); 
  };

  return (
    <div className="topbar">
      <div className="topbar-left"></div>

      <div className="search-container">
        <img src={searchIcon} alt="search" className="search-icon" />
        <input
          type="text"
          placeholder="Search anything..."
          className="search-input"
        />
      </div>

      <div className="topbar-right">
        <div className="notification">
          <img src={notificationIcon} alt="notification" />
          <span className="notification-dot"></span>
        </div>

        <div className="profile">
          <img src={profileImage} alt="profile" className="profile-img" />

          <img
            src={arrowIcon}
            alt="arrow"
            className="arrow-icon"
            onClick={() => setShowDropdown(!showDropdown)}
          />

          {showDropdown && (
            <div className="dropdown-menu">
              <div className="logout-btn" onClick={handleLogout}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Topbar;