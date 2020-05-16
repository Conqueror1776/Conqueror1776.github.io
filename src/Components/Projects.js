import React from 'react';
import './Styling/Projects.css';
import ProjectCard from './ProjectCard.js';

function Projects() {
    return (
        <div id='projects'>
          <div className='project-section'>
            <h1>My Projects</h1>
            <div className='card-section'>
              <ProjectCard title ="Project 1" source="#" link="#">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ProjectCard>
              <ProjectCard title="Project 2" source="#" link="#">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ProjectCard>
              <ProjectCard title="Project 3" source="#" link="#">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ProjectCard>
            </div>
          </div>
        </div>
    );

}

export default Projects;
