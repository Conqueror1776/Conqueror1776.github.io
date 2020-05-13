import React from 'react';
import './Styling/Contacts.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Contacts() {
    return (
        <div id='contact'>
          <h1>Contact Me</h1>
          <div className="socials">
            <a href="https://www.github.com/Conqueror1776" id='icon'>
              <GitHubIcon fontSize='large' className='iconImage'/>
              <p className='iconText'>GitHub</p>
            </a>
            <a href="mailto:elijahtamarchenko@gmail.com" id='icon'>
              <EmailIcon fontSize='large' className='iconImage'/>
              <p className='iconText' >Email</p>
            </a>
            <a href="https://www.linkedin.com/in/elijah-tamarchenko-030203197/" id='icon'>
              <LinkedInIcon fontSize='large' className='iconImage'/>
              <p className='iconText'>LinkedIn</p>
            </a>
          </div>
        </div>
    );
}

export default Contacts;
