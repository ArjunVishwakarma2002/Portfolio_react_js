import React from "react";
import "./style.css";

 function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">

        {/* Title */}
        <div className="education-title">
          <span>MY JOURNEY</span>
          <h2>Education</h2>
        </div>

        {/* Education Cards */}
        <div className="education-card">

          {/* MCA */}
          <div className="edu-item">
            <div className="edu-year">2024 - Present</div>

            <h3>Master of Computer Applications (MCA) in Software Engineering</h3>

            <p className="edu-college">
              Amity University
            </p>

            <p className="edu-text">
              Currently pursuing MCA with focus on Full Stack Development,
              Software Engineering, Database Management, and Modern Web Technologies.
            </p>
          </div>

          {/* BSc IT */}
          <div className="edu-item">
            <div className="edu-year">2021 - 2024</div>

            <h3>B.Sc. in Information Technology</h3>

            <p className="edu-college">
              University of Mumbai
            </p>

            <p className="edu-text">
              Built strong foundations in programming, web development,
              database systems, networking, and software development.
            </p>
          </div>

          {/* HSC */}
          <div className="edu-item">
            <div className="edu-year">2019 - 2021</div>

            <h3>Higher Secondary Education (HSC)</h3>

            <p className="edu-college">
              Maharashtra State Board
            </p>

            <p className="edu-text">
              Completed higher secondary education with focus on
              computer science and information technology subjects.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;