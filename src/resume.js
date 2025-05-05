import React from 'react';
import './resume.css';

const Resume = () => {
  const resumeImage = '/resume.png';
  const resumePDF = '/RyanKim_Resume_Brown.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'RyanKim_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      <div className="resume-image-container">
        <img 
          src={resumeImage} 
          alt="Ryan Kim's Resume" 
          className="resume-image"
        />
        <div className="download-overlay">
          <button 
            className="download-btn"
            onClick={handleDownload}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15V3M12 15L8 11M12 15L16 11M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;