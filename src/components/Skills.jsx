import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js',
    'Express', 'MongoDB', 'Git', 'REST APIs', 'C++',
    'DSA', 'SQL', 'OOPS', 'POSTMAN'
  ];

  return (
    <div className="skills-page">
      <h2 className="skills-title">My Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>

      <div className="resume-link">
        <h3>Check out my Resume:</h3>
        <a
          href="https://drive.google.com/file/d/1bUcUqGX9zUKZDLy443Kq0BI1GM4CrTFM/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Skills;
