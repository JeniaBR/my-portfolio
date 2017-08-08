import React from 'react';
import './AboutMe.css';
import myImage from '../img/me.jpg';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="wrapper">
        <h2 className="first">Hi I'm Jenia Brook,</h2>
        <h2 className="second">a fullstack engineer</h2>
        <h2 className="third">who loves JavaScript</h2>
      </div>
      <img className="img" src={myImage} alt="Me :)"/>
      <p className="wrapper">
        I like to focus on client-side development for all devices using web technologies (JavaScript, CSS and HTML) with big attention to adaptive/responsive web design, to serve accessible content for each devices.
      </p>
    </div>
  );
}

export default AboutMe;