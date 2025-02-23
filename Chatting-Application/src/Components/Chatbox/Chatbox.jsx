import React, { useEffect } from "react";
import "./Chatbox.css";
import assets from "../../assets/assets";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

import {
  onSnapshot,
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { toast } from "react-toastify";
import { upload } from "../../lib/upload";

const Chatbox = () => {
  const {
    userData,
    messagesId,
    chatUser,
    messages,
    setMessages,
    chatVisiblity,
    setChatVisiblity,
  } = useContext(AppContext);

  const [input, setInput] = useState("");

  const sendMessage = async () => {
    try {
      if (input && messagesId) {
        await updateDoc(doc(db, "messages", messagesId), {
          messages: arrayUnion({
            sId: userData.id,
            text: input,
            createdAt: new Date(),
          }),
        });
        const userIds = [chatUser.rId, userData.id];
        userIds.forEach(async (id) => {
          const userChatsRef = doc(db, "chats", id);
          const userChatsSnap = await getDoc(userChatsRef);
          if (userChatsSnap.exists()) {
            const userChatData = userChatsSnap.data();
            const chatIndex = userChatData.chatData.findIndex(
              (c) => c.messagesId == messagesId
            );
            userChatData.chatData[chatIndex].lastMessage = input.slice(0, 30);
            userChatData.chatData[chatIndex].updatedAt = Date.now();
            if (userChatData.chatData[chatIndex].rId == userData.id) {
              userChatData.chatData[chatIndex].messageSeen = false;
            }
            await updateDoc(userChatsRef, {
              chatData: userChatData.chatData,
            });
          }
        });
      }
    } catch (error) {
      toast.error(error.message);
    }
    setInput("");
  };

  const sendImage = async (e) => {
    try {
      const fileUrl = await upload(e.target.files[0]);
      if (fileUrl && messagesId) {
        await updateDoc(doc(db, "messages", messagesId), {
          messages: arrayUnion({
            sId: userData.id,
            image: fileUrl,
            createdAt: new Date(),
          }),
        });
        const userIds = [chatUser.rId, userData.id];
        userIds.forEach(async (id) => {
          const userChatsRef = doc(db, "chats", id);
          const userChatsSnap = await getDoc(userChatsRef);
          if (userChatsSnap.exists()) {
            const userChatData = userChatsSnap.data();
            const chatIndex = userChatData.chatData.findIndex(
              (c) => c.messagesId == messagesId
            );
            userChatData.chatData[chatIndex].lastMessage = "Image";
            userChatData.chatData[chatIndex].updatedAt = Date.now();
            if (userChatData.chatData[chatIndex].rId == userData.id) {
              userChatData.chatData[chatIndex].messageSeen = false;
            }
            await updateDoc(userChatsRef, {
              chatData: userChatData.chatData,
            });
          }
        });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const convertTimeStamp = (timestamp) => {
    let date = timestamp.toDate();
    const hour = date.getHours();
    const min = date.getMinutes().toString().padStart(2, "0"); // Pad with leading zero if needed

    // Handle 12-hour format correctly
    const formattedHour = hour % 12 || 12; // Converts 0 to 12 for midnight
    const period = hour >= 12 ? "PM" : "AM";

    return `${formattedHour}:${min} ${period}`;
  };

  useEffect(() => {
    if (messagesId) {
      const chatRef = doc(db, "messages", messagesId);
      const unSub = onSnapshot(chatRef, (res) => {
        setMessages(res.data().messages.reverse());
      });
      return unSub;
    }
  }, [messagesId]);

  return chatUser ? (
    <div className={`chat-box ${chatVisiblity ? "" : "hidden"}`}>
      <div className="chat-user">
        <img src={chatUser.userData.avatar} alt="" />
        <p>
          {chatUser.userData.name}
          {Date.now() - chatUser.userData.lastseen < 700000 ? (
            <img className="dot" src={assets.green_dot} alt="" />
          ) : null}
        </p>
        <img src={assets.help_icon} className="help" alt="" />
        <img
          onClick={() => setChatVisiblity(false)}
          src={assets.arrow_icon}
          className="arrow"
          alt=""
        />
      </div>

      <div className="chat-msg">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sId == userData.id ? "s-msg" : "r-msg"}
          >
            {msg["image"] ? (
              <img className="msg-image" src={msg.image} alt="" />
            ) : (
              <p className="msg">{msg.text}</p>
            )}

            <div>
              <img
                src={
                  msg.sId == userData.id
                    ? userData.avatar
                    : chatUser.userData.avatar
                }
                alt=""
              />
              <p>{convertTimeStamp(msg.createdAt)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Send a Message"
        />
        <input
          onChange={sendImage}
          type="file"
          id="image"
          accept="image/png, image.jpeg/"
          hidden
        />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img onClick={sendMessage} src={assets.send_button} alt="" />
      </div>
    </div>
  ) : (
    <div className={`chat_welcome ${chatVisiblity ? "" : "hidden"}`}>
      {/* <img src={assets.logo} alt="" /> */}
      <p className="Chat_Wel1">ACM Student Chapter </p>
      <p className="Chat_Wel1">Chatting Platform</p>
    </div>
  );
};

export default Chatbox;
