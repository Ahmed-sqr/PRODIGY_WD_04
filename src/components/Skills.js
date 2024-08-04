import React from 'react';
import './Skills.css';

const skills = [
  'JavaScript', 'HTML', 'CSS', 'Material UI', 'Node CLI',
  'ReactNative', 'TypeScript', 'NPM Packages', 'SQL', 'Node.js', 'Front-End Development'
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
