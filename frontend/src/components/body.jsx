
import React from "react";
import "./body.css";

export default function ChatWindow() {
  return (
    <div className="chat-window">
      <div className="chat-content">
        <div className="welcome">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
            alt="chat logo"
            className="welcome-icon"
          />
          <h2>Welcome to AI Chat</h2>
          <p>
            Start a conversation with our AI assistant. Ask questions, get help
            with tasks, or explore ideas together.
          </p>
          <div className="examples">
            <button>✨ Explain quantum computing</button>
            <button>📝 Write a Python function to sort a list</button>
            <button>🧘 What are the benefits of meditation?</button>
            <button>✈️ Help me plan a weekend trip to Paris</button>
          </div>
        </div>
      </div>

      <div className="chat-footer">
        <form className="composer">
          <input placeholder="Ask me anything..." />
          <button type="button">Send</button>
        </form>
        <p className="hint">Press Enter to send, Shift+Enter for new line</p>
      </div>
    </div>
  );
}
