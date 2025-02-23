import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Chat from "./pages/chat/chat";
import ProfileUpdate from "./pages/profile_update.jsx/profile_update";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Leads from "./pages/Leads/leads";
import { auth } from "./config/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { useEffect } from "react";
import { AppContext } from "./context/AppContext";

import Event from "./pages/events/event";
import About from "./pages/about/about";

const App = () => {
  const navigate = useNavigate();
  const { loadUserData } = useContext(AppContext);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/chat");
        await loadUserData(user.uid);
      } else {
        navigate("/");
      }
    });
  }, []);
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<ProfileUpdate />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/event" element={<Event />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};
export default App;
