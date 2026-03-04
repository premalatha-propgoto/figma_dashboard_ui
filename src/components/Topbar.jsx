import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Topbar.css";

import searchIcon from "../assets/search.png";
import notificationIcon from "../assets/notify.svg";
import profileImage from "../assets/Group 13.svg";
import arrowIcon from "../assets/arrow-down.png";

function Topbar() {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/Login");
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
        {/* Notification Button */}
        <button
          className="icon-button"
          onClick={() => {
            setShowNotificationDropdown(!showNotificationDropdown);
            setShowProfileDropdown(false);
          }}
        >
          <img src={notificationIcon} alt="notification" className="icon-img" />
        </button>
{showNotificationDropdown && (
          <div className="notification-dropdown">
            <p className="no-notifications">No notifications</p>
          </div>
        )}

        {/* Profile Image Button */}
        <button
          className="icon-button profile-button"
          onClick={() => {
            setShowProfileDropdown(!showProfileDropdown);
            setShowNotificationDropdown(false);
          }}
        >
          <img src={profileImage} alt="profile" className="profile-img" />
          <img src={arrowIcon} alt="arrow" className="arrow-icon" />
        </button>

        {showProfileDropdown && (
          <div className="dropdown-menu">
            <div className="logout-btn" onClick={handleLogout}>Logout</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Topbar;