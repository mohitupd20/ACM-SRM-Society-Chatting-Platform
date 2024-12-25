import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Chat from "./pages/chat/chat";
import Profile_update from "./pages/profile_update.jsx/profile_update";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile_update />} />
      </Routes>
    </>
  );
};
export default App;
