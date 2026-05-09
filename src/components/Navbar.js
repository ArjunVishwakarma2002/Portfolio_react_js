import React, { useState } from "react";
import "./style.css";
import resume from "../assets/Arjun_Vishwakarma.pdf";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <h1 className="logo">Arjun Vishwakarma</h1>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </div>

      {/* Links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Education</a></li>
        <li><a href="/portfolio">Skills</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/contact">Contact</a></li>

        {/* Resume Button */}
        <li>
          <a href={resume} download className="resume-btn">
            📄 Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}