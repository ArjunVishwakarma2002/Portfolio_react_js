import React from "react";
import "./style.css";
import ARJUN from "../assets/images/ARJUN.jpeg";
import resume from "../assets/Arjun_Vishwakarma.pdf";
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Image Section */}
        <div className="about-image">
          <div className="image-wrapper">
            <img src={ARJUN} alt="Arjun Vishwakarma" />
          </div>
        </div>

        {/* Content Section */}
        <div className="about-content">
          <span className="section-tag">ABOUT ME</span>

          <h2>
            MERN Stack & <span>Java Developer</span>
          </h2>

          <p className="about-text">
            I’m <strong>Arjun Vishwakarma</strong>, a passionate Full Stack
            Developer focused on building modern, responsive, and scalable
            web applications.
          </p>

          <p className="about-text">
            Skilled in <strong>React.js, Node.js, Express.js, MongoDB, Java,
            Spring Boot, MySQL</strong>, and frontend technologies, I enjoy
            transforming ideas into real-world digital experiences.
          </p>

          <p className="about-text">
            Currently pursuing my <strong>MCA in Software Engineering</strong>,
            I continuously improve my development skills through hands-on
            projects, problem-solving, and learning modern technologies.
          </p>

          {/* Skills */}
          <div className="about-skills">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>MySQL</span>
          </div>

          {/* Buttons */}
          <div className="about-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a href={resume} download className="btn resume-btn secondary-btn">
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}