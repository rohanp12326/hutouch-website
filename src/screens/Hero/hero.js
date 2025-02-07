import React from "react";
import "./hero.css";
import heroImage from "../../assets/images/hutouch_logo.png"; // Ensure this image exists in your assets

const Hero = ({ fullpageApi }) => {
  // When the button is clicked, move down to the next section (Vision)
  const handleActionClick = () => {
    if (fullpageApi) {
      fullpageApi.moveSectionDown();
    }
  };
  const handleSignUpClick = () => {
    // Open the HubSpot form in a new tab
    window.open("https://share.hsforms.com/1zMNWuJJnQYWjq_SWLnUptweb6am", "_blank");
  };
  return (
    <section className="section hero">
      {/* Header with HuTouch Logo on the Left & Action Button on the Right */}
      <header className="hero__header">
        <h1 className="hero__logo">
          Hu<span>Touch</span>
        </h1>
        <button className="hero__action-button" onClick={handleActionClick}>
          See HuTouch in Action {">"}
        </button>
      </header>

      {/* Main Content with Gradient Background */}
      <div className="hero__content-wrapper">
        <h1 className="hero__title">
          Unleash your Developer Potential with HuTouch
        </h1>
        <p className="hero__subtitle">
          Save time, enhance creativity, and focus on what matters most:
          building exceptional solutions.
        </p>

        {/* Image in Place of {H} */}
        <img src={heroImage} alt="HuTouch Visual" className="hero__image" />

        <p className="hero__beta-text">Join the Private Beta – It’s Free!</p>

        {/* Signup Form: Input removed; only the Signup button is shown */}
        <div className="hero__signup-form">
          <button className="hero__signup-button" onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
