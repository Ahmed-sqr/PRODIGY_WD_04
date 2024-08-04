import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'RcipeApp',
    description: 'ReactNative Rsceipe food app with ReactNative ui components and expo app.',
    link: 'https://github.com/Ahmed-sqr/RecipeApp'
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
