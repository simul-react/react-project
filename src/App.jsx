import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"
import {fetchUsers} from"./services/user"
import API from "./services/axios";

function App() {
//const [users, setUsers] = useState([]);

  useEffect(() => {
    addUsers();
  }, []);

  const addUsers = async () => {
    try {
      const res = API.post("http://localhost:5000/add-user", {
        name: "admin111",
        email: "admin@gmail111.com",
        password:"12345678"
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
