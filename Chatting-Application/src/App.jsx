import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Chat from "./pages/chat/chat";
import ProfileUpdate from "./pages/profile_update.jsx/profile_update";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Leads from "./pages/Leads/leads";
import { use } from "react";
import { auth } from "./config/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./config/firebase";
import { createContext } from "react";

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
      </Routes>
    </>
  );
};
export default App;
