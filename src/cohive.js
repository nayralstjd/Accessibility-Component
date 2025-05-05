import React, { useState } from "react";
import "./cohive.css";

const CohiveProject = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="cohive-project">
      <div className="project-header">
        <div className="title-container">
          <img 
            src="cohive.png" 
            alt="CoHive Logo" 
            className="cohive-logo clickable-image"
            onClick={() => openImage("cohive.png")}
          />
          <h1 className="project-title">CoHive Case Study</h1>
        </div>
        <p className="project-subtitle">
          Analyzing a smart rental solution for urban consumers
        </p>
      </div>

      <section className="project-section introduction">
        <h2 className="section-title">About CoHive</h2>
        <div className="intro-content">
          <p>
            <strong>CoHive</strong> is an early-stage startup founded by Brown University and RISD students that rethinks appliance ownership through a shared economy model. As a B-Corp certified company, their platform addresses the inefficient economics of purchasing expensive items for infrequent use.
          </p>
          <p>
            This case study examines their innovative approach to solving common pain points for students and young renters in urban environments.
          </p>
        </div>
      </section>

      <section className="project-section value-proposition">
        <div className="value-container">
          <div className="value-text">
            <h2>Identifying the Problem</h2>
            <p className="lead">
              Traditional ownership creates <span className="highlight">underutilized assets</span> while renters face <span className="highlight">unnecessary expenses</span>
            </p>
            <p>
              The CoHive team recognized that urban consumers frequently need <strong>high-quality appliances</strong> (like vacuums, projectors, or kitchen gear) but encounter three key barriers:
            </p>
            <ul className="pain-points">
              <li><strong>Cost prohibitive</strong> - $200+ purchases for items used 2-3 times monthly</li>
              <li><strong>Space inefficient</strong> - 20% of apartment storage devoted to rarely-used items</li>
              <li><strong>Maintenance burden</strong> - Repairs and upkeep fall entirely on owners</li>
            </ul>
          </div>
          <div className="value-image">
            <img 
              src="appliances.png" 
              alt="Appliances available through CoHive" 
              className="clickable-image"
              onClick={() => openImage("appliances.png")}
            />
          </div>
        </div>

        <div className="solution-breakdown">
          <div className="solution-image">
            <img 
              src="function.png" 
              alt="CoHive's operational model" 
              className="clickable-image"
              onClick={() => openImage("function.png")}
            />
          </div>
          <div className="solution-text">
            <h2>The CoHive Model</h2>
            <div className="solution-card">
              <h3>🔹 On-Demand Access</h3>
              <p>Users rent premium appliances by the hour only when needed</p>
            </div>
            <div className="solution-card">
              <h3>🔹 Distributed Hubs</h3>
              <p>Network of pickup locations near campuses and apartments</p>
            </div>
            <div className="solution-card">
              <h3>🔹 Managed Service</h3>
              <p>Includes maintenance, cleaning, and replacements</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section example-flow">
        <h2 className="section-title">User Experience Flow</h2>
        <div className="flow-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Discover Inventory</h3>
            <p>Check real-time availability of nearby appliances</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Flexible Booking</h3>
            <p>Choose between $2.50/30min or $20 monthly plans</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Frictionless Return</h3>
            <p>Return to any hub location after use</p>
          </div>
        </div>
      </section>

      <section className="project-section project-overview">
        <h2 className="section-title">Project Scope</h2>
        <div className="scope-container">
          <p>
            CoHive engaged our team to address critical challenges in their market expansion and technical implementation:
          </p>
          <div className="task-list">
            <div className="task-card">
              <h3>Market Strategy</h3>
              <ul className="no-bullets">
                <li>Identify property managers' key concerns about offering shared amenities</li>
                <li>Develop data-driven outreach materials using existing user testing insights</li>
              </ul>
            </div>
            <div className="task-card">
              <h3>Technical Implementation</h3>
              <ul className="no-bullets">
                <li>Assess limitations of current Wix API integration</li>
                <li>Define requirements for appliance locking mechanism integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section outreach">
        <h2 className="section-title">Outreach Initiative</h2>
        <div className="outreach-container">
          <div className="outreach-text">
            <h3>Goal</h3>
            <p>Establish connections with residential properties and promote CoHive's shared appliance solution</p>
            <h3>Engagement Process</h3>
            <ul className="process-steps">
              <li>
                <strong>Cold outreach:</strong> Initiated 200+ emails/calls to properties in Northeast region
              </li>
              <li>
                <strong>Warm introductions:</strong> Leveraged sales reps to connect with property decision-makers
              </li>
              <li>
                <strong>Product demonstrations:</strong> Conducted 32 presentations highlighting tenant benefits and ROI
              </li>
            </ul>
            <h3>Outcome</h3>
            <p>Established pipeline with 200+ properties across 6 states, with 18 moving to pilot discussions</p>
          </div>
          <div className="outreach-visual">
            <img 
              src="sheet.png" 
              alt="Property outreach tracking sheet" 
              className="outreach-sheet clickable-image"
              onClick={() => openImage("sheet.png")}
            />
          </div>
        </div>
        <div className="key-insights">
          <h3>Key Insights Gathered</h3>
          <div className="insight-cards">
            <div className="insight-card">
              <h4>Product Status</h4>
              <p>Properties needed clarity on MVP capabilities vs. roadmap features</p>
            </div>
            <div className="insight-card">
              <h4>Business Model</h4>
              <p>Concerns about electricity costs and revenue share models emerged</p>
            </div>
            <div className="insight-card">
              <h4>Implementation</h4>
              <p>Timeline expectations varied from 2 weeks to 3 months</p>
            </div>
            <div className="insight-card">
              <h4>Technical Constraints</h4>
              <p>Many properties lacked reliable WiFi in storage areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Technical Implementation Section */}
      <section className="project-section technical-implementation">
        <h2 className="section-title">Technical Implementation Initiatives</h2>
        <div className="protocol-comparison">
          <h3>What To Use: REST API vs MQTT</h3>
          <div className="comparison-table1">
  <div className="protocol-column">
    <div className="protocol-header rest">
      <h4>REST API</h4>
    </div>
    <ul>
      <li><strong>Request-response communication</strong> - Client explicitly requests data and server responds synchronously</li>
      <li><strong>Each interaction independent</strong> - No persistent connection between requests (stateless)</li>
      <li><strong>Ideal for web-based systems</strong> - Built on HTTP standards familiar to web developers</li>
      <li><strong>Easy to debug</strong> - Standard status codes and human-readable request/response formats</li>
      <li><strong>Used for Wix ↔ Backend</strong> - Perfect for user-initiated actions like browsing inventory or starting rentals</li>
      <li><strong>Higher bandwidth usage</strong> - Each request contains full headers and metadata</li>
      <li><strong>Client-driven</strong> - Requires user or system to initiate communication</li>
      <li><strong>Point-to-point</strong> - Direct communication between two systems</li>
    </ul>
  </div>
  <div className="protocol-column">
    <div className="protocol-header mqtt">
      <h4>MQTT</h4>
    </div>
    <ul>
      <li><strong>Publish-subscribe model</strong> - Devices publish messages to topics that subscribers listen to</li>
      <li><strong>Persistent connection</strong> - Maintains open connection to broker for instant communication</li>
      <li><strong>Real-time updates</strong> - Subscribers receive messages immediately without polling</li>
      <li><strong>Low latency</strong> - Minimal protocol overhead enables fast message delivery</li>
      <li><strong>Used for Machine ↔ Backend</strong> - Ideal for appliance status updates and sensor data</li>
      <li><strong>Lightweight protocol</strong> - Small message size (as small as 2 bytes overhead)</li>
      <li><strong>Event-driven</strong> - Machines can push updates when state changes occur</li>
      <li><strong>One-to-many</strong> - Single message can be broadcast to multiple subscribers</li>
      <li><strong>Quality of Service levels</strong> - Supports message delivery guarantees (0-2)</li>
    </ul>
  </div>
</div>
        </div>
        
        <div className="hybrid-rationale">
      <h4>Why a Hybrid Approach?</h4>
      <p>
        Different parts of the CoHive system have distinct communication needs:
      </p>
      <ul>
        <li>
          <strong>User-facing actions</strong> (rentals, availability checks) benefit from REST's request-response model
        </li>
        <li>
          <strong>Device status updates</strong> require MQTT's real-time capabilities
        </li>
        <li>
          <strong>Network conditions vary</strong> - MQTT handles spotty connectivity better
        </li>
        <li>
          <strong>Scalability</strong> - MQTT's lightweight protocol is ideal for IoT devices
        </li>
      </ul>
      <p className="conclusion">
        By combining both protocols, CoHive gets the <strong>best of both worlds</strong>:
        the reliability of REST for critical transactions and the efficiency of MQTT
        for real-time device communication.
      </p>
    </div>

        <div className="hybrid-system">
          <h3>Hybrid System Recommendation</h3>
          <div className="system-diagram">
            <div className="system-component frontend">
              <h4>Frontend</h4>
              <ul>
                <li>Wix Website Interface</li>
                <li>User Dashboard</li>
              </ul>
            </div>
            
            <div className="system-component backend">
              <h4>Backend</h4>
              <ul>
                <li>Handles API requests</li>
                <li>Processes MQTT messages</li>
                <li>Manages database</li>
              </ul>
            </div>
            
            <div className="system-component machine">
              <h4>IoT Device</h4>
              <ul>
                <li>Weight sensors</li>
                <li>RFID readers</li>
                <li>Lock mechanism</li>
              </ul>
            </div>
            
            <div className="arrows">
              <div className="arrow rest-api">REST API</div>
              <div className="arrow mqtt">MQTT</div>
            </div>
          </div>
        </div>
        
        <div className="workflow-section">
          <h3>Rental Workflow</h3>
          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-number">1</div>
              <h4>User Initiates Rental</h4>
              <p>User selects product on Wix and sends rental request via REST API</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">2</div>
              <h4>Availability Check</h4>
              <p>Backend verifies product status in database</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">3</div>
              <h4>Machine Activation</h4>
              <p>If available, backend unlocks product via REST API</p>
            </div>
            <div className="workflow-step">
              <div className="step-number">4</div>
              <h4>Return Detection</h4>
              <p>Machine detects return via sensors and publishes MQTT message</p>
            </div>
          </div>
        </div>
        
        
      </section>

      {selectedImage && (
        <div className="image-modal" onClick={closeImage}>
          <div className="modal-content-container">
            <div className="modal-content">
              <span className="close-button" onClick={closeImage}>&times;</span>
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="modal-image"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CohiveProject;