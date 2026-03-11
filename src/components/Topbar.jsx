import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Topbar.css";
import Snackbar from "../components/Snackbar";
import searchIcon from "../assets/search.png";
import notificationIcon from "../assets/notify.svg";
import Avatar from "../components/Avatar";
import arrowIcon from "../assets/arrow-down.png";

function Topbar() {
  const [showProfileBox, setShowProfileBox] = useState(false);
  const [showLogoutBox, setShowLogoutBox] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "info",
  });
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedRole = localStorage.getItem("role");

    if (storedEmail) setUserEmail(storedEmail);
    if (storedRole) setRole(storedRole);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/Login");
  };

  return (
    <div className="topbar">
      <div className="topbar-left"></div>

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search anything..."
          className="search-input"
        />
        <img src={searchIcon} alt="search" className="search-icon" />
      </div>

      <div className="topbar-right">
        <button
          className="icon-button"
          onClick={() => {
            setSnackbar({
              open: true,
              message: "No notifications",
              type: "info",
            });

            setShowProfileBox(false);
            setShowLogoutBox(false);
          }}
        >
          <img src={notificationIcon} alt="notification" className="icon-img" />
        </button>

        <button
          className="icon-button profile-button"
          onClick={() => {
            setShowProfileBox(!showProfileBox);
            setShowLogoutBox(false);
          }}
        >
          <Avatar name={role} size={36} />
        </button>
        <button
          className="icon-button"
          onClick={() => {
            setShowLogoutBox(!showLogoutBox);
            setShowProfileBox(false);
          }}
        >
          <img src={arrowIcon} alt="arrow" className="arrow-icon" />
        </button>
        {showProfileBox && (
          <div className="profile-box">
            <h4>{userEmail}</h4>
            <p>{role}</p>
          </div>
        )}
        {showLogoutBox && (
          <div className="logout-box">
            <div className="logout-btn" onClick={handleLogout}>
              Logout
            </div>
          </div>
        )}
      </div>
      <Snackbar
        open={snackbar.open}
        message={snackbar.message}
        type={snackbar.type}
        onClose={() => setSnackbar({ open: false, message: "", type: "info" })}
      />
    </div>
  );
}

export default Topbar;
