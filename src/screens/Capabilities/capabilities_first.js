import React from "react";
import "./capabilities_first.css";
import generateCodeImage from "../../assets/images/generate_code.png";
import mobileMockupImage from "../../assets/images/mobile_mockup.png";

const CapabilitiesFirst = () => {
  return (
    <div className="section double-capabilities">
      {/* Page Title */}
      <h1 className="page-title">Explore HuTouch’s Capabilities</h1>

      {/* "More can be done" Section - Image on the Right */}
      <div className="capability-container more-can-be-done">
        {/* Text Block */}
        <div className="image-wrapper">
          <img src={generateCodeImage} alt="Generate Code UI" className="capability-image" />
        </div>
        <div className="capability-block">
          <h3>More can be done with just One Prompt</h3>
          <p>
            HuTouch allows you to create a fully functional app or screen with just a single prompt. You can:
          </p>
          <ul>
            <li>Generate an Entire Screen</li>
            <li>Implement API Integrations</li>
            <li>Add/Update Functionalities to your Project</li>
            <li>Fix errors in just one Prompt</li>
          </ul>
        </div>
        {/* Image Block */}
        
      </div>

      {/* "Tailored to Your Specs" Section - Image on the Left */}
      <div className="capability-container tailored-to-specs">
        {/* Image Block */}
        <div className="image-wrapper">
          <img src={mobileMockupImage} alt="Mobile Mockup" className="capability-image" />
        </div>
        {/* Text Block */}
        <div className="capability-block">
          <h3>Tailored to Your Specs</h3>
          <p>
            HuTouch seamlessly adapts to your project’s specifications, coding standards, and requirements. Convert your Figma designs or API documentation into fully functional screens, integrate features on the fly, and fix issues before they escalate.
          </p>
          <ul>
            <li>Generate an Entire Screen</li>
            <li>Implement API Integrations</li>
            <li>Add/Update Functionalities to your Project</li>
            <li>Fix errors in just one Prompt</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesFirst;
