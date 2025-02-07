import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./vision.css";

const imageData = [
  {
    image_path: require("../../assets/images/ss1-portrait.png"),
    time_taken: "35 mins",
    pass_rate: "81%",
  },
  {
    image_path: require("../../assets/images/ss2-portrait.png"),
    time_taken: "18 mins",
    pass_rate: "81%",
  },
  {
    image_path: require("../../assets/images/ss3-portrait.png"),
    time_taken: "12 mins",
    pass_rate: "81%",
  },
];

const Vision = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideClass, setSlideClass] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Slide the current image out to the RIGHT.
    setSlideClass("slide-out-right");

    setTimeout(() => {
      // Change index (wrapping around if necessary)
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
      );

      // Position new image off-screen to the LEFT.
      setSlideClass("slide-in-left");

      requestAnimationFrame(() => {
        // Animate new image into center.
        setSlideClass("");
        setTimeout(() => {
          setIsAnimating(false);
        }, 500);
      });
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Slide the current image out to the LEFT.
    setSlideClass("slide-out-left");

    setTimeout(() => {
      // Change index (wrapping around if necessary)
      setCurrentIndex((prevIndex) =>
        prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
      );

      // Position new image off-screen to the RIGHT.
      setSlideClass("slide-in-right");

      requestAnimationFrame(() => {
        // Animate new image into center.
        setSlideClass("");
        setTimeout(() => {
          setIsAnimating(false);
        }, 500);
      });
    }, 500);
  };

  const handleExploreClick = () => {
    window.open("https://github.com/Niiti/HuTouch-AI-Demo/tree/main/recipely", "_blank");
  };

  return (
    <section className="section huTouchInAction">
      {/* Top section with title and navigation arrows */}
      <div className="huTouchInAction__top">
        <h2 className="huTouchInAction__title">See HuTouch in Action</h2>
        <div className="huTouchInAction__navigation">
          {/* Left Arrow wrapped in arrow-container */}
          <div className="arrow-container" onClick={handlePrev}>
            <div className="nav-arrow">
              <FaArrowLeft />
            </div>
          </div>
          <span className="page-indicator">
            {currentIndex + 1}/{imageData.length}
          </span>
          {/* Right Arrow wrapped in arrow-container */}
          <div className="arrow-container" onClick={handleNext}>
            <div className="nav-arrow">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* Main content (Text + Image) */}
      <div className="huTouchInAction__content">
        {/* Left Text Content */}
        <div className="huTouchInAction__text">
          <div className="feature-block">
            <h3>SAVE &gt;25% EFFORT AND GENERATE &gt;50% REUSABLE CODE</h3>
            <p>
              Focus on applying your talents on complex, custom, or challenging
              coding tasks while HuTouch generates the first working app/screen
              tailored to your project specs.
            </p>
          </div>

          <div className="feature-block">
            <h3>REDUCE 20% REVIEW COMMENTS</h3>
            <p>
              Self-Review your code to identify and resolve issues early,
              minimizing revisions and giving you more time to optimize
              performance and validate the overall architecture.
            </p>
          </div>

          <div className="feature-block">
            <h3>ELEVATE YOUR PROGRAMMING SKILLS</h3>
            <p>
              Enhance your coding expertise with articles and short tutorials
              recommended by HuTouch, personalized to match your current skill
              level and help you grow as you work.
            </p>
          </div>
        </div>

        {/* Right Phone Mockup + Bottom Stats/Button */}
        <div className="huTouchInAction__image">
          <div className={`image-container ${slideClass}`}>
            <img
              src={imageData[currentIndex].image_path}
              alt="HuTouch Demo Screen"
            />
          </div>

          <div className="huTouchInAction__bottom-section">
            <p className="huTouchInAction__stats">
              🕒 Total Time Taken: {imageData[currentIndex].time_taken} | ✅
              Unit Testing Pass Rate: {imageData[currentIndex].pass_rate}
            </p>
            <button className="huTouchInAction__button" onClick={handleExploreClick}>
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
