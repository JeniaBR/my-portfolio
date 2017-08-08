import React from 'react';
import './AboutMe.css';
import myImage from '../img/me.jpg';

const AboutMe = () => {
  return (
    <div className="container about-me-container">
      <div className="intro-wrapper">
        <h2 className="first">Hi I'm Jenia Brook,</h2>
        <h2 className="second">a fullstack developer</h2>
        <h2 className="third">who loves JavaScript</h2>
      </div>
      <img className="img" src={myImage} alt="Me :)"/>
    </div>
  );
}

export default AboutMe;