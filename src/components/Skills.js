import React from "react";
import "./style.css";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "MySQL",
    "Java",
    "Spring Boot",
    "Hibernate",
    "microservices",
    "Python",
    "Git & GitHub",
    "RESTful APIs",
    "Docker",
    "Dotnet",
    "Asp.Net Core",
    "C#"
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* Title */}
        <div className="skills-title">
          <span>MY SKILLS</span>
          <h2>Technical Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}