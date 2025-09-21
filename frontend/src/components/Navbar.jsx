import React, { useState } from "react";
import "./Navbar.css";

export default function TopBar() {
  const user = { name: "Shashank", credits: 1250 };
  const unread = 1;

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    alert("User logged out!");
    setOpen(false); 
  };

  return (
    <div className="topbar">
      <div className="brand">AI Chat</div>

      <div className="right">
        <div className="credits">
          <button className="credit-btn">
            <span className="icon">⏳</span> {user.credits.toLocaleString()}
          </button>
        </div>

        <div className="notif">
          <span className="bell">🔔</span>
          {unread > 0 && <span className="notif-badge">{unread}</span>}
        </div>

        <div className="profile" onClick={() => setOpen(!open)}>
          <div className="avatar">👤</div>
          <span className="name">{user.name}</span>
          <span className="arrow">▼</span>

          {open && (
            <div className="dropdown">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
