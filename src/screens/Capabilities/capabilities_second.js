import React from "react";
import "./capabilities_first.css";
import reviewComments from "../../assets/images/review_comments.png";
import growEveryday from "../../assets/images/grow_everyday.png";

const CapabilitiesSecond = () => {
  return (
    <div className="section double-capabilities">
      {/* "More can be done" Section - Image on the Right */}
      <div className="capability-container more-can-be-done">
        {/* Text Block */}
        <div className="image-wrapper">
          <img
            src={growEveryday}
            alt="Grow everyday"
            className="capability-image"
          />
        </div>
        <div className="capability-block">
          <h3>Grow Every Day</h3>
          <p>
            HuTouch is designed to help you learn and grow with every project,
            all while adapting to your personal coding style. It’s the perfect
            tool to enhance your skills step by step, allowing you to
            continuously improve and make progress at your own pace. With
            HuTouch you can get better every day and climb the ladder faster
            than ever!
          </p>
        </div>
      </div>

      {/* "Tailored to Your Specs" Section - Image on the Left */}
      <div className="capability-container tailored-to-specs">
        {/* Image Block */}
        <div className="image-wrapper">
          <img
            src={reviewComments}
            alt="Review Comments"
            className="capability-image"
          />
        </div>
        {/* Text Block */}
        <div className="capability-block">
          <h3>Reduce Review Comments</h3>
          <p>
            With HuTouch, you can effortlessly review your entire codebase with
            just one click. Not only that, but you'll also be given the option
            to make all necessary corrections with a single click as well. This
            powerful tool lets you take full control of your code, giving you
            the confidence to challenge your tech leads and elevate your
            development process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesSecond;
