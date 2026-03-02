import "./RightPanel.css"
import gridIcon from "../assets/Group 1.png"
import calendarIcon from "../assets/calender.png"
import callIcon from "../assets/call.png"

import p1 from "../assets/profile 1.png"
import p2 from "../assets/profile 2.png"
import p3 from "../assets/profile 3.png"

import user1 from "../assets/profile 1.png"
import user2 from "../assets/profile 2.png"
import user3 from "../assets/profile 3.png"
import user4 from "../assets/profile 4.png"
function RightPanel() {
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
      <h3 className="section-title">New Task</h3>
      <label className="task-title">Task Title</label>
      <input type="text" placeholder="Create new" className="task-input" />
    <div className="emoji-wrapper">
  <button className="arrow-btn left-arrow" onClick={() => scrollEmojis(-100)}>‹</button>

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

  <button className="arrow-btn right-arrow" onClick={() => scrollEmojis(100)}>›</button>
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
    </div>
  );
  
}
export default RightPanel