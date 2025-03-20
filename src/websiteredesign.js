import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./websiteredesign.css"; // Ensure this file includes styling for carousel

function NewPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedDevice, setSelectedDevice] = useState("laptop");

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
 
    const sections = [
        {
            title: "Efficiency",
            content: [
                "The website’s navigation heavily relies on plain text links without distinct categorization, making it difficult for users to quickly locate specific products or information.",
                "Each category looks visually identical, using the same X-ray skull image, which does not help differentiate sections.",
                "The search bar is not prominently placed or styled, making it harder for users to find specific products.",
            ],
        },
        {
            title: "Learnability",
            content: [
                "The site’s outdated layout relies on tables for structure, which is rarely used in modern web design.",
                "This makes the page feel cluttered and unintuitive, especially for new users who expect a more streamlined experience.",
                "Lack of clear headings and subheadings makes it difficult to navigate.",
                "Important information should be emphasized with larger fonts, proper spacing, and contrasting colors for better clarity."
            ],
        },
        {
            title: "Memorability",
            content: [
                "The website lacks strong branding elements that make it stand out.",
                "There are no distinctive design choices, color schemes, or logos that help users remember the site.",
                "Minimal interactive features make the site feel static and unengaging.",
                "Adding interactive elements such as hover effects, animations, or product previews could improve user retention."
            ],
        },
        {
            title: "Conceptual Model",
            content: [
                "Users expect a professional and structured layout, especially for a medical equipment website.",
                "The current outdated design may impact the perceived credibility of the business.",
                "Information is not well-organized, making it difficult to browse products logically.",
                "A better product grid layout with filtering options would improve user experience."
            ],
        },
        {
            title: "Accessibility Analysis",
            content: [
                "Some text has low contrast, making it difficult to read for visually impaired users.",
                "Several images lack alternative text, making them inaccessible to screen readers.",
                "The website does not use ARIA landmarks or proper heading structures, making navigation difficult for assistive technology users.",
                "Implementing proper semantic HTML and improving contrast would enhance accessibility."
            ],
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sections.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sections.length) % sections.length);
    };

    const handleDeviceChange = (device) => {
        setSelectedDevice(device);
    };

    return (
        <div className="app-container">
            <header className="project-header">
                <h1>Responsive Redesign</h1>
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
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/accessibility-redesign">Project 1: Accessibility Redesign</Link></li>
                    <li><Link to="/personas-storyboarding">Project 2: Personas & Storyboarding</Link></li>
                    <li><Link to="/website-redesign">Project 3: Website Redesign</Link></li>
                </ul>
            </div>

            {/* Page Content */}
            <div className="new-page-container">
                <p>For this project, I dived into the process of redesigning a web page. Specifically, I wanted to analyze existing interfaces, create thoughtful mockups across different screen sizes, and bring these ideas to life with a fully responsive website.</p>
            </div>

            <div className="website-descr">
                <p>The website we'll look at today is (You can scroll through the content within the embedded iframe to explore the full page):</p>
                <iframe src="https://www.pnwx.com/" width="1175px" height="600px" title="Website Redesign"></iframe>
            </div>

            <p className="website-descr2">
                I chose {" "}
                <a href="https://www.pnwx.com/" target="_blank" rel="noopener noreferrer">
                    Pacific Northwest X-Ray Inc
                </a>{" "}
                's website because it presents a good opportunity to explore how a dated design and poor user experience can be improved through a modern, responsive redesign.
            </p>

            {/* Carousel Section */}
            <div className="carousel">
                <button className="carousel-btn" onClick={prevSlide}>←</button>
                <div className="carousel-content">
                    <h2>{sections[currentSlide].title}</h2>
                    <ul>
                        {sections[currentSlide].content.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
                <button className="carousel-btn" onClick={nextSlide}>→</button>
            </div>

            {/* Recommendations Section */}
            <div className="recommendations">
                <h2>Recommendations for Improvement</h2>
                <ul>
                    <li><strong>Redesign the Layout:</strong> Move away from table-based layouts and implement a modern, responsive design with improved spacing, alignment, and typography.</li>
                    <li><strong>Enhance Navigation & Search:</strong> Introduce a well-structured navigation menu with clear categories and make the search bar more visible with better styling and autocomplete features.</li>
                    <li><strong>Improve Accessibility:</strong> Fix contrast issues, add alternative text to images, and use semantic HTML with proper ARIA roles to improve screen reader compatibility.</li>
                    <li><strong>Increase User Engagement:</strong> Add interactive elements such as hover effects, animations, and product previews. Improve branding with distinct colors, typography, and a strong logo.</li>
                </ul>
            </div>
            <div className="visual-redesign">
    <h2>Visual Redesign</h2>
    <p>
        Before creating the mockup, here is the <strong>Visual Design Style Guide</strong> that establishes the key elements of my redesign, ensuring consistency in layout, colors, and typography.
    </p>
    <img src="visual.png" alt="Visual Design Style Guide" className="visual-guide-img" />
</div>



 {/* Device Preview Section */}
 <div className="device-preview">
                <h2>Device Preview</h2>
                <p>
                Using this visual design guide, I created three mockups in Figma to represent the website's layout on a laptop, iPad, and phone.
    </p>
                <div className="screen-container">
                    <img 
                        src={`${selectedDevice}.png`} 
                        alt={`${selectedDevice} preview`} 
                        className="device-image"
                    />
                </div>
                <div className="device-buttons">
                    <button onClick={() => handleDeviceChange("laptop")}>Laptop</button>
                    <button onClick={() => handleDeviceChange("ipad")}>iPad</button>
                    <button onClick={() => handleDeviceChange("phone")}>Phone</button>
                </div>
            </div>
            <p className="mockdescr">While I made significant changes to the overall design, I want you to focus on how the layout adapts as the screen size decreases. As the device gets smaller, font sizes shrink, and elements like the top menu bar condense into icons. Additionally, the information hierarchy evolves; on a laptop, elements are displayed side by side, but as the screen width narrows, the layout shifts to a more vertical structure, with content stacking on top of one another.</p>
            <div className="website-descr">
                <p>The website we'll look at today is:</p>
                {/* Hyperlink to open pacific.html in a new tab */}
                <a href="/pacific.html" target="_blank" rel="noopener noreferrer">
                    Pacific Northwest X-Ray Inc.
                </a>
            </div>
        </div>
    );
}

export default NewPage;
