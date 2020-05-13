import React from 'react';
import './Styling/ProjectCard.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

function ProjectCard() {
    return (
        <div id='projectcard'>
            <Card id='card'>
              <CardContent id='cardinternal'>
                <img className='projectImage' src={require('./img1.png')} alt="Stuff"/>
                <h1> Title </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Varius sit amet mattis vulputate enim nulla aliquet porttitor.
                Viverra suspendisse potenti nullam ac tortor vitae purus faucibus
                ornare.</p>
                <div className='projectTags'>
                  <Button variant="contained">Source</Button>
                  <Button variant="contained">See It</Button>
                </div>
              </CardContent>
            </Card>
        </div>
    );

}

export default ProjectCard;
