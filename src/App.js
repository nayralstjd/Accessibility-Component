import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AccessibilityRedesign from "./accessibility";
import PersonasStoryboarding from "./PersonasStoryboarding";
import "./sidebar.css";

// Sidebar component
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {isOpen && (
        <button className="close-btn" onClick={toggleSidebar}>
          &#10005;
        </button>
      )}
      <h2>Projects</h2>
      <ul>
        <li>
          <Link to="/accessibility-redesign">Project 1: Accessibility Redesign</Link>
        </li>
        <li>
          <Link to="/personas-storyboarding">Project 2: Personas & Storyboarding</Link>
        </li>
      </ul>
    </div>
  );
};

// Homepage component
const Homepage = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="homepage">
      <h1>Welcome</h1>
      <button className="hamburger" onClick={toggleSidebar}>
        &#9776; {/* Hamburger icon */}
      </button>
      {/* Pass the isSidebarOpen state to Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

const AppRouter = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // Toggle the sidebar open/close state
  };

  return (
    <Router>
      <Routes>
        {/* Pass isSidebarOpen and toggleSidebar to Homepage */}
        <Route
          path="/"
          element={<Homepage toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />}
        />
        <Route path="/accessibility-redesign" element={<AccessibilityRedesign />} />
        <Route path="/personas-storyboarding" element={<PersonasStoryboarding />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
