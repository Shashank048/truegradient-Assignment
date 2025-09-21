import React from "react";
import "./Leftside.css";

export default function LeftPanel() {
  return (
    <div className="left-panel">
      <div className="header">
        <h3>Conversations</h3>
        <button className="new-chat">+ New Chat</button>
      </div>

      <div className="convo-list">
        <div className="empty-state">
          <div className="empty-icon">💬</div>
          <div className="empty-text">No conversations yet</div>
        </div>
      </div>
    </div>
  );
}
