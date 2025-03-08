import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './persona.css';

function PersonasStoryboarding() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
  return (
    <div className="app-container">
      <header className="project-header">
        <h1>Personas and Storyboarding</h1>
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
            <Link to="/accessibility-redesign">Project 1: Accessibility Redesign</Link> {/* Link to itself */}
          </li>
          
          {/* Link for Project 2 */}
          <li>
            <Link to="/personas-storyboarding">Project 2: Personas & Storyboarding</Link> {/* Link to personasstoryboarding.js */}
          </li>
        </ul>
      </div>

      <p className='descr'>
      I want to focus on observing real users interacting with an interface, conducting unbiased interviews to gather insights, and using those observations to create personas. I want to get a true sense of their needs and frustrations, then use that to create relatable personas. I’m especially interested in how to turn these insights into a story that shows the full user journey in a way that feels real and meaningful. Ultimately, I hope this helps me understand users better and design experiences that truly meet their needs.
      </p>
    {/* New Content - Public Interface */}
    <p className="descr2">
        The public interface I wanted to examine is the <strong>drink vending machines</strong> at <strong>Brown University’s campus</strong>. These machines offer multiple payment options:  
            </p>
            <ul className="descr3">
                <li>Tap to Pay (e.g., Apple Pay, Google Pay)</li>
                <li>Cash</li>
                <li>Credit/Debit Card</li>
                <li><strong>Brown ID Card</strong> (Unique to Brown University students)</li>
            </ul>

            {/* Image */}
            <div className="image-container">
                <img src="/annotate.png" alt="Brown University Vending Machine" className="vending-machine-img" />
            </div>
        {/* Interview Questions Section */}
            <h2 className="section-title1">Interview Questions</h2>
            <p className='interdescr'>
            In this step, I set out to learn more about how people interact with the interface by observing and interviewing three different users. It was important to approach this as a naturalistic observation, meaning I wanted to be respectful and non-invasive while paying close attention to how they used the interface. As I watched the users, I noted how they navigated the interface, focusing on any struggles or difficulties they faced. This would give me valuable insights to shape my user personas.
            </p>
            <p className="interdescr2">
            So when it came to interviewing this is what I wanted to focus on:
            </p>
            <ul className="interview-questions">
                <li>What factors influenced your decision to use this vending machine instead of another option (if available)?</li>
                <li>Can you walk me through the steps you took to purchase a drink?</li>
                <li>How easy or difficult was it to identify your preferred drink on the machine?</li>
                <li>What payment method did you choose, and why?</li>
                <li>Would you feel confident using this vending machine again without instructions?</li>
            </ul>

            {/* Observations Section */}
            <h2 className="section-title2">Key Observations</h2>
            <ul className="observations">
                <li>Users typically scanned the drink selection before pressing a button, with some hesitating before making a choice.</li>
                <li>A few users struggled with the payment panel, particularly in orientation of the cards.</li>
                <li>Some users had difficulty retrieving their drink from the dispensing slot, especially when bottles got stuck.</li>
                <li>Returning users completed their purchases more quickly than first-time users, suggesting a learning curve.</li>
                <li>Payment preferences varied, with some favoring cash and others attempting to use a card or digital payment.</li>
                <li>Users showed slight frustration when buttons were unresponsive or when the vending process was slow.</li>
                <li>Improvements suggested included clearer payment instructions, better lighting for product image buttons, and an easier-to-access dispensing slot.</li>
            </ul>
            <h2 className="section-title">Personas: Empathy Maps</h2>

<div className="personas-container">
    <div className="persona">
        <h3 className="persona1">The Time-Conscious Student</h3>
        <div className="image-container">
            <img src="/persona1.png" alt="Persona #1" />
        </div>
    </div>

    <div className="persona2">
        <h3 className="persona2">The Indecisive Explorer</h3>
        <div className="image-container">
            <img src="/persona2.png" alt="Persona #2" />
        </div>
    </div>
</div>
<h2 className="section-title">Storyboard</h2>
<p className='descr'>Let's visualize the time-conscious student who is always looking for ways to optimize their study time and manage tasks efficiently. This storyboard will highlight their interaction with an app or interface designed to help them prioritize tasks, schedule study sessions, and track progress in a way that minimizes wasted time.</p>
<div className="image-container2">
                <img src="/storyboard.png"/>
            </div>
        </div>
    );
}

export default PersonasStoryboarding;