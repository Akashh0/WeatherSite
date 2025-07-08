// Footer.jsx
import React from "react";
import "./Footer.css";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section brand">
        <h2>HorizonX</h2>
        <p>Your window to the sky. Real-time weather insights around the globe.</p>
      </div>

      <div className="footer-section links">
        <h3>Explore</h3>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/globe">Interactive Globe</a></li>
          <li><a href="/stats">Weather Stats</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>

      <div className="footer-section contact">
        <h3>Contact Us</h3>
        <p>Email: <a href="mailto:support@horizonx.com">akashkrishh75@gmail.com</a></p>
        <p>Phone: <a href="tel:+919876543210">+91 7418181515</a></p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} HorizonX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
