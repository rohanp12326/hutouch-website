import React from "react";
import "./feedback.css";
import discord from "../../assets/images/discord_icon.png"; // Correct Import Path
import mail from "../../assets/images/gmail.png";
import avatarImg from "../../assets/images/feedback-user.jpg"; // Asset image for testimonial avatars

const testimonials = [
  {
    name: "DAKOTA JOHNSON",
    company: "Microsoft",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum lacus ac augue iaculis, a dignissim enim tristique. Suspendisse potenti. Mauris sit amet massa eu nulla gravida consequat.",
    avatar: avatarImg,
  },
  {
    name: "DAKOTA JOHNSON",
    company: "Microsoft",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum lacus ac augue iaculis, a dignissim enim tristique. Suspendisse potenti. Mauris sit amet massa eu nulla gravida consequat.",
    avatar: avatarImg,
  },
  {
    name: "DAKOTA JOHNSON",
    company: "Microsoft",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum lacus ac augue iaculis, a dignissim enim tristique. Suspendisse potenti. Mauris sit amet massa eu nulla gravida consequat.",
    avatar: avatarImg,
  },
  {
    name: "DAKOTA JOHNSON",
    company: "Microsoft",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum lacus ac augue iaculis, a dignissim enim tristique. Suspendisse potenti. Mauris sit amet massa eu nulla gravida consequat.",
    avatar: avatarImg,
  },
];

const TestimonialCard = ({ name, company, text, avatar }) => {
  return (
    <div className="testimonial-card">
      <img src={avatar} alt={name} className="testimonial-avatar" />
      <div className="testimonial-content">
        <p className="testimonial-text">{text}</p>
        <p className="testimonial-name">{name.toUpperCase()}</p>
        <p className="testimonial-company">{company}</p>
      </div>
    </div>
  );
};

const Feedback = () => {
  return (
    <section className="section testimonials-section">
      <h2 className="testimonials-title">What Developers are Saying</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      {/* Connect Section with two buttons aligned to opposite sides, pushed to the bottom */}
      <div className="connect-section">
        <a
          href="mailto:logical@niiti.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mail-button"
        >
          Queries? Reach us at
          <img src={mail} alt="Mail Icon" />
        </a>

        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="discord-button"
        >
          <img src={discord} alt="Discord Icon" />
          Follow us on Discord
        </a>
      </div>
    </section>
  );
};

export default Feedback;
