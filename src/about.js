import React, { useEffect } from 'react';
import './about.css';

const About = () => {
  useEffect(() => {
    // Set document title
    document.title = "About Ryan | Portfolio";
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Intersection Observer for scroll animations
    const sections = document.querySelectorAll('.about-section');
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach((section, index) => {
      section.style.opacity = 0;
      section.style.transform = 'translateY(20px)';
      section.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about-container">
      <h1 className="profile-header">About Me</h1>
      
      <img 
        src="/headshot.jpg" 
        alt="Ryan Kim" 
        className="profile-image"
        onLoad={(e) => {
          e.target.style.opacity = 1;
          e.target.style.transition = 'opacity 0.6s ease';
        }}
        style={{ opacity: 0 }}
      />
      
      <div className="about-content">

        <div className="about-section">
          <p>
            My journey started in <span className="highlight">finance</span>, where I analyzed businesses through an investment and economic lens. 
            I later moved into more <span className="highlight">consulting</span> roles, often leading projects that required structured problem-solving and strategic thinking.
          </p>
          <p>
            Across all of these roles, I kept coming back to <span className="highlight">technology</span>, not just as an industry, but as a space I wanted to be closer to in terms of building and shaping. 
            What began as an interest in market and business dynamics evolved into a focus on how products are designed, developed, and brought to life.
          </p>
          <p>
            Now <span className="highlight">product-oriented work</span> is the direction I’m now intentionally pursuing. 
            This portfolio highlights some of the work and research I’ve done to better understand the specific, often nuanced details of what makes a product effective, especially from the perspective of user experience, design tradeoffs, and business alignment.
          </p>
        </div>

        <div className="about-section">
          <h3>Key Experiences</h3>
          <ul className="experience-list">
            <li>Strategic consulting projects analyzing tech company growth</li>
            <li>Product development internship at Boostability</li>
            <li>Financial analysis of emerging technology sectors</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>Technical Skills</h3>
          <div className="skills-container">
            <span className="skill-pill">Product Design</span>
            <span className="skill-pill">Market Analysis</span>
            <span className="skill-pill">Strategic Consulting</span>
            <span className="skill-pill">Figma</span>
            <span className="skill-pill">Data Visualization</span>
          </div>
        </div>

        <div className="about-section">
          <h3>Project Focus Areas</h3>
          <p>
            My work examines critical aspects of product development through the lens of <span className="highlight">human-centered design</span>:
          </p>
          <ul className="experience-list">
            <li>Accessibility and inclusive design practices</li>
            <li>Responsive interface architecture and visual hierarchy</li>
            <li>User behavior and technical implementation</li>
          </ul>
          <p>
            I'm excited to bridge my analytical background with <span className="highlight">user-focused design</span> to create meaningful, accessible technological solutions.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
