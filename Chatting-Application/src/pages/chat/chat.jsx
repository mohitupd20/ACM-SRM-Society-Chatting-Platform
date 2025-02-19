import React, { useEffect, useState, useContext } from "react";
import "./chat.css";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import Chatbox from "../../Components/Chatbox/Chatbox";
import RightSidebar from "../../Components/RightSidebar/RightSidebar";
import { AppContext } from "../../context/AppContext";


const Chat = () => {
  const { chatData, userData } = useContext(AppContext); // Assuming AppContext provides an object
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (chatData && userData) {
      setLoading(false);
    }
  }, [chatData, userData]);

  return (
    <div className="chat">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="chat-container">
          <LeftSidebar />
          <Chatbox />
          <RightSidebar />
        </div>
      )}
    </div>
  );
};

export default Chat;
