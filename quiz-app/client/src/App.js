import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import CreateQuiz from "./Dashboards/CreateQuiz";
import Student from "./Dashboards/Student";
import Teacher from "./Dashboards/Teacher";
import Header from "./Header/Header";
import Home from "./Home";

export default function App() {
  return (
    <div>
            <Header />
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teacher-dashboard" element={<Teacher />} />
        <Route path="/student-dashboard" element={<Student />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        
      </Routes>
    </div>
  );
}
