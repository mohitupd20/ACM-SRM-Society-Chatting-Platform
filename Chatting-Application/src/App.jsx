import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Chat from "./pages/chat/chat";
import ProfileUpdate from "./pages/profile_update.jsx/profile_update";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Leads from "./pages/Leads/leads";
const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<ProfileUpdate />} />
        <Route path="/leads" element={<Leads/>}/>
      </Routes>
    </>
  );
};
export default App;
