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
                  <p> I am a current undergraduate student at Williams College,
                   planning to double major in Computer Science and Statistics. </p>
                </CardContent>
            </Card>
            <Card className={classes.root} variant="outlined" id="about-2">
              <CardContent>
                  <p> I am very interested and passionate about machine learning
                   and its application to Data Analysis. I am interested by
                   front end development, and enjoy learning about the web
                    development process</p>
              </CardContent>
            </Card>
            <Card className={classes.root} variant="outlined" id="about-3">
              <CardContent>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.</p>
              </CardContent>
            </Card>
          </div>
        </div>
    );

}

export default AboutMe;
