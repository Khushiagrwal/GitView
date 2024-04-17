import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Input from "./Container/Input";
import UserPage from "./Container/UserPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Input/>} />
        <Route path="/user/:username" element={<UserPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

