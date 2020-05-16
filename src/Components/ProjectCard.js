import React from 'react';
import './Styling/ProjectCard.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

function ProjectCard(props) {
    return (
        <div id='projectcard'>
            <Card id='card'>
              <CardContent id='cardinternal' hover zoom>
                <img className='projectImage' src={require('./img1.png')} alt="Stuff"/>
                <div className='projectOverlay'>
                  <h1> {props.title} </h1>
                  <p>{props.children}</p>
                  <div className='projectTags'>
                    <Button variant="contained">Source</Button>
                    <Button variant="contained">See It</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
        </div>
    );

}

export default ProjectCard;
