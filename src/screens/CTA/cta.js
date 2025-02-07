import React from "react";
import "./cta.css"; // Import the CSS file

const CTA = () => {
  const handleClick = () => {
    // Open the HubSpot form in a new tab
    window.open("https://share.hsforms.com/1zMNWuJJnQYWjq_SWLnUptweb6am", "_blank");
  };

  return (
    <div className="section hero-container">
      {/* Background Gradient Effects */}
      <div className="gradient-bg gradient-left"></div>
      <div className="gradient-bg gradient-right"></div>

      {/* Main Content Wrapper */}
      <div className="cta-content">
        <h1 className="hero-title">Transform the Way You Code</h1>
        <h2 className="hero-subtitle">Join HuTouch Today!</h2>
        <div className="button-group">
          <button className="primary-button" onClick={handleClick}>
            Get Private Beta Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
