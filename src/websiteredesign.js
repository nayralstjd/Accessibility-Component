import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./websiteredesign.css"; // Optional: Add styling

function NewPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="app-container">
            <header className="project-header">
                <h1>New Page</h1>
                {/* Three-line hamburger icon for sidebar */}
                <div className="hamburger" onClick={toggleSidebar}>
                    &#9776;
                </div>
            </header>

            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <h2>Projects</h2>
                <button className="close-btn2" onClick={toggleSidebar}>
                    &#10005;
                </button>
                <ul>
                    {/* Homepage */}
                    <li>
                        <Link to="/">Homepage</Link> {/* Link to itself */}
                    </li>
                    {/* Link for Project 1 */}
                    <li>
                        <Link to="/accessibility-redesign">Project 1: Accessibility Redesign</Link>
                    </li>
                    {/* Link for Project 2 */}
                    <li>
                        <Link to="/personas-storyboarding">Project 2: Personas & Storyboarding</Link>
                    </li>
                    {/* Link for New Page */}
                    <li>
                        <Link to="/website-redesign">Project 3: Website Redesign</Link>
                    </li>
                </ul>
            </div>

            {/* Page Content */}
            <div className="new-page-container">
                <p>This is the new page content.</p>
            </div>
        </div>
    );
}

export default NewPage;
