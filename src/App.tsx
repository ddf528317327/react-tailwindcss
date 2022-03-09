import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import User from "./user";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul className="flex justify-around pt-1 bg-amber-200">
          <li className="p-1.5">
            <Link to="/">Home</Link>
          </li>
          <li className="p-1.5">
            <Link to="/about">About</Link>
          </li>
          <li className="p-1.5">
            <Link to="/user">User</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
