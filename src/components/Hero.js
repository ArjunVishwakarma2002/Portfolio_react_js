import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./style.css";
import resume from "../assets/Arjun_Vishwakarma.pdf";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        
        <p className="title">Full Stack Developer</p>

        <h1 className="name">
          Hi, I'm <span>Arjun Vishwakarma</span>
        </h1>

        {/* Typing Animation */}
        <h2 className="typing">
          <TypeAnimation
            sequence={[
              "I am a Developer 💻",
              2000,
              "I build Web Apps 🌐",
              2000,
              "I love Coding ❤️",
              2000,
              "I work with JavaScript, React, Node.js, Java, Spring Boot, MongoDB, and MySQL",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="bio">
          I build modern web applications using the MERN stack and Java, with a focus on performance, clean design, and real-world usability.
        </p>

        <div className="hero-buttons">
          <a href="/portfolio" className="btn-primary">
            View Projects
          </a>

          <a href={resume} download className="btn-secondary">
            📄 Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}