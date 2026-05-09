import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo / Name */}
        <div className="footer-logo">
          <h2>Arjun Vishwakarma</h2>

          <p>
            MERN Stack & Java Developer building modern,
            responsive, and scalable web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h3>Connect</h3>

          <div className="social-icons">

            <a
              href="https://github.com/arjunvishwakarma2https://github.com/ArjunVishwakarma2002"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/arjunvishwakarma-1b373b227/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="mailto:arjunvishwakarma714@gmail.com"
            >
              Email
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 Arjun Vishwakarma. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}