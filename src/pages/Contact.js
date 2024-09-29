import React from 'react';
import 'animate.css';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="animate__animated animate__fadeIn contact-page">
      <h1>Contact Me</h1>
      <p>Feel free to reach out via email or social media.</p>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/alfonso-raziel-mendoza-avila-6aaa6992" target="_blank" rel="noopener noreferrer" className="social-button">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Raziel1991" target="_blank" rel="noopener noreferrer" className="social-button">
          <FaGithub />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-button">
          <FaTwitter />
        </a>
        <a href="mailto:raziel.mendoza1@outlook.com" className="social-button">
          <FaEnvelope />
        </a>
      </div>

      {/* Placeholder Contact Form */}
      <div className="contact-form">
        <form>
          <div>
            <label>First Name:</label>
            <input type="text" placeholder="First Name" disabled />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" placeholder="Last Name" disabled />
          </div>
          <div>
            <label>Email Address:</label>
            <input type="email" placeholder="Email Address" disabled />
          </div>
          <div>
            <label>Message:</label>
            <textarea placeholder="Your Message" disabled></textarea>
          </div>
          <button type="submit" disabled>Send</button>
        </form>
      </div>
      <div className="Margin-bottom"></div>
    </div>
  );
};

export default Contact;
