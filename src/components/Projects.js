import React from "react";
import "./style.css";

export default function Projects() {

  const projectData = [
    {
      title: "Pizza Ordering App",
      tech: "React JS • Node JS • MongoDB",
      description:
        "A full-stack food ordering application with cart, authentication, and online order management system.",
      github: "#",
      demo: "#",
    },

    {
      title: "Creative Bits Website",
      tech: "HTML • CSS • PHP • MySQL",
      description:
        "Developed a responsive educational institute website with dynamic pages and contact form integration.",
      github: "#",
      demo: "https://cbcreativebit.in/",
    },

    {
      title: "I Tour Android App",
      tech: "Java • SQLite • XML",
      description:
        "Android tourism application that helps users explore destinations, hotels, and travel information.",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* Title */}
        <div className="projects-title">
          <span>MY WORK</span>
          <h2>Projects</h2>
        </div>

        {/* Project Cards */}
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-tech">
                  {project.tech}
                </p>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn demo-btn"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}