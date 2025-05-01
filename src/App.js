import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AccessibilityRedesign from "./accessibility";
import PersonasStoryboarding from "./PersonasStoryboarding";
import Redesign from "./websiteredesign";
import "./sidebar.css";

const Navbar = () => {
  const [isWorkHovered, setIsWorkHovered] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout);
    setIsWorkHovered(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsWorkHovered(false);
    }, 300);
    setDropdownTimeout(timeout);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
    <div className="nav-logo">
      <a href="/homepage.html">Ryan</a>
        </div>
        
        <div className="nav-links">
          {/* <Link to="/homepage.html" className="nav-link">
            <span className="nav-link-text">Home</span>
            <span className="nav-link-underline"></span>
          </Link> */}
          <a href="/homepage.html" className="nav-link">
           <span className="nav-link-text">Home</span>
          <span className="nav-link-underline"></span>
        </a>

          
          <div 
            className="nav-link dropdown-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-link-text">
              Work
              <svg 
                className={`dropdown-icon ${isWorkHovered ? 'open' : ''}`} 
                width="25" 
                height="25" 
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </span>
            <span className="nav-link-underline"></span>
            {isWorkHovered && (
              <div 
                className="dropdown-menu"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/accessibility-redesign" className="dropdown-item">
                  <span className="dropdown-icon">⎋</span>
                  <div>
                    <div className="dropdown-title">Accessibility Redesign</div>
                    <div className="dropdown-subtitle">Project 1</div>
                  </div>
                </Link>
                <Link to="/personas-storyboarding" className="dropdown-item">
                  <span className="dropdown-icon">⎋</span>
                  <div>
                    <div className="dropdown-title">Personas & Storyboarding</div>
                    <div className="dropdown-subtitle">Project 2</div>
                  </div>
                </Link>
                <Link to="/websiteredesign" className="dropdown-item">
                  <span className="dropdown-icon">⎋</span>
                  <div>
                    <div className="dropdown-title">Website Redesign</div>
                    <div className="dropdown-subtitle">Project 3</div>
                  </div>
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/about" className="nav-link">
            <span className="nav-link-text">About</span>
            <span className="nav-link-underline"></span>
          </Link>
          
          <Link to="/fun" className="nav-link">
            <span className="nav-link-text">Fun</span>
            <span className="nav-link-underline"></span>
          </Link>

          <Link to="/resume" className="nav-link">
            <span className="nav-link-text">Resume</span>
            <span className="nav-link-underline"></span>
          </Link>

        </div>
      </div>
    </nav>
  );
};

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Welcome</h1>
      {/* Content goes here */
      <a 
      href="/homepage.html" 
      target="_blank" 
      rel="noopener noreferrer"
      className="teal-link"
  >
      im linking to the homepage
  </a>
      }
    </div>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/accessibility-redesign" element={<AccessibilityRedesign />} />
        <Route path="/personas-storyboarding" element={<PersonasStoryboarding />} />
        <Route path="/websiteredesign" element={<Redesign />} />
        {/* Add routes for About and Fun Resume when ready */}
      </Routes>
    </Router>
  );
};

export default AppRouter;

