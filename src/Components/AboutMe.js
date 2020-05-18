import React from 'react';
import './Styling/AboutMe.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function AboutMe() {
  const classes = useStyles();
    return (
        <div id="about-me">
          <h1>Who Am I?</h1>
          <div className="about-section">
            <Card className={classes.root} variant="outlined" id="about-1">
              <CardContent>
                  <p> I am currently an undergraduate at Williams College pursuing
                  a B.A. in Computer Science and Statistics, with a concentration
                  in Cognitive Science. </p>
                </CardContent>
            </Card>
            <Card className={classes.root} variant="outlined" id="about-2">
              <CardContent>
                  <p> I am currently deepening my skills in computer science,
                  learning about the application of machine learning tools
                  to statistical analysis and forecasting, as well as developing
                  my skills as a front-end developer by learning React.
                  </p>
              </CardContent>
            </Card>
            <Card className={classes.root} variant="outlined" id="about-3">
              <CardContent>
                  <p> I am also very passionate about the application of computer
                  science to cognitive science, specifically in the use of artificial
                  intelligence to model human behavior and decision making in order
                  to render and create better models for the understanding of the human mind</p>
              </CardContent>
            </Card>
          </div>
        </div>
    );

}

export default AboutMe;
