import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login.jsx";
import { Signup } from "./pages/signup.jsx";
import { TasksProvider } from "./contexts/Taskcontext.jsx";
import { UserProvider } from "./contexts/Usercontext.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Protectedlayout } from "./layout/Protectedlayout.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <UserProvider>
    <TasksProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes element={<Protectedlayout />}>
          <Route path="/" element={<App />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </TasksProvider>
  </UserProvider>
);
