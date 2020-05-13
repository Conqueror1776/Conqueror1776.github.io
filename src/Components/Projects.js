import React from 'react';
import './Styling/Projects.css';
import ProjectCard from './ProjectCard.js';

function Projects() {
    return (
        <div id='projects'>
          <div className='project-section'>
            <h1>My Projects</h1>
            <div className='card-section'>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>
        </div>
    );

}

export default Projects;
