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
          <li>
                        <Link to="/websiteredesign">Project 3: Website Redesign</Link>
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
            {/* Image with Hover Effect */}
<div className="image-hover-container">
    <p className="hover-indicator">Hover over the image to see annotations!</p>
    <img 
        src="/original.png" 
        alt="Vending Machine Interface" 
        className="hover-image" 
    />
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
            <p className="descrip">
    Given these observations, I created two personas to represent different types of users interacting with Brown University's vending machines. To better understand their experiences, I developed a four-quadrant empathy map for each persona, capturing what they think, feel, say, and do during their interaction.
</p>

<p className="descrip2">
    This approach is important because it allows me to:
</p>

<ul className="descrip-list">
    <li>✔ <strong>Step into the user's mindset</strong>, identifying their motivations, frustrations, and decision-making processes.</li>
    <li>✔ <strong>Understand emotional responses</strong>, such as frustration when a payment method doesn’t work or satisfaction when the process is seamless.</li>
    <li>✔ <strong>Analyze spoken feedback versus actual behavior</strong>, revealing potential gaps between what users expect and how they truly interact with the interface.</li>
    <li>✔ <strong>Identify usability pain points and areas for improvement</strong>, ensuring that any redesign or optimization of the vending machine addresses real user needs.</li>
</ul>

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
<h2 className="section-title">Similarities & Differences Between Personas</h2>

<div className="comparison-container">
    {/* Similarities List */}
    <div className="comparison-box">
        <h3 className="subheading">Similarities:</h3>
        <ul className="similarities-list">
            <li>✔ Both personas experience frustration with vending machine usability – whether it’s slow response time, unclear product images, or difficulty retrieving a drink.</li>
            <li>✔ Both interact with the interface by scanning options first before making a selection.</li>
            <li>✔ Both personas are affected by the machine’s responsiveness, especially when buttons or payment methods don’t work smoothly.</li>
            <li>✔ Both personas highlight a need for interface improvements, including better payment instructions and clearer product images.</li>
        </ul>
    </div>

    {/* Differences List */}
    <div className="comparison-box">
        <h3 className="subheading">Differences:</h3>
        <ul className="differences-list">
            <li>🔹 The Time-Conscious Student prioritizes speed and efficiency, quickly choosing their usual drink and getting frustrated if the machine slows them down.</li>
            <li>🔹 The Indecisive Explorer takes their time comparing options and second-guessing choices, sometimes walking away without purchasing.</li>
            <li>🔹 The Time-Conscious Student gets annoyed when buttons are unresponsive or when retrieving the drink takes too long, whereas The Indecisive Explorer focuses more on product clarity and pricing.</li>
            <li>🔹 Payment preferences differ – The Time-Conscious Student taps impatiently, while The Indecisive Explorer considers cost before paying.</li>
        </ul>
    </div>
</div>


<h2 className="section-title">Storyboard</h2>
<p className='descr'>Let's visualize the time-conscious student who is always looking for ways to optimize their study time and manage tasks efficiently. This storyboard will highlight their interaction with an app or interface designed to help them prioritize tasks, schedule study sessions, and track progress in a way that minimizes wasted time.</p>
<div className="image-container2">
                <img src="/storyboard.png"/>
            </div>
            <p className="reflection-text"> 
            This process of creating personas, empathy maps, and a storyboard provided valuable insights into user behavior and interface challenges. The <strong>Time-Conscious Student</strong> highlighted the need for speed and efficiency, while the <strong>Indecisive Explorer</strong> emphasized decision-making struggles and the importance of clear product information. The storyboard was particularly useful in visualizing the user journey step-by-step, making pain points more apparent. Key takeaways include improving button responsiveness, streamlining payments, and enhancing product visibility to create a smoother, frustration-free experience. By understanding both user needs and emotions, we can design more intuitive and accessible interfaces.

</p>
        </div>
    );
}

export default PersonasStoryboarding;