import "./Topbar.css"

import searchIcon from "../assets/search.png"
import notificationIcon from "../assets/notification.png"
import profileImage from "../assets/Group 14.png"
import arrowIcon from "../assets/arrow-down.png"

function Topbar() {
  return (
    <div className="topbar">
      {/* Left Empty Space (to balance layout) */}
      <div className="topbar-left"></div>
      {/* Center Search */}
      <div className="search-container">
        <img src={searchIcon} alt="search" className="search-icon" />
        <input
          type="text"
          placeholder="Search anything..."
          className="search-input"
        />
      </div>
      {/* Right Section */}
      <div className="topbar-right">
        <div className="notification">
          <img src={notificationIcon} alt="notification" />
          <span className="notification-dot"></span>
        </div>
        <div className="profile">
          <img src={profileImage} alt="profile" className="profile-img" />
          <img src={arrowIcon} alt="arrow" className="arrow-icon" />
        </div>
      </div>

    </div>
  )
}

export default Topbar