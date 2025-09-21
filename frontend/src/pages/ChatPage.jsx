import React from 'react';
import TopBar from '../components/Navbar';
import LeftPanel from '../components/Leftside';
import ChatWindow from '../components/body';


export default function ChatPage() {

  return (
    <div className="page">
      <TopBar />
      <div className="main">
        <LeftPanel />
        <ChatWindow />
      </div>
    </div>
  );
}
