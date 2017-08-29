import React from 'react';
import './Intro.css';
import myImage from '../img/me.jpg';

const Intro = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="header">
          <h2>Hi I'm Jenia Brook, a fornt end engineer who loves JavaScript</h2>
        </div>
        <img className="img" src={myImage} alt="Me :)"/>
        <p className="paragraph">
          I like to focus on client-side development for all devices using web technologies (JavaScript, CSS and HTML) with big attention to adaptive/responsive web design, to serve accessible content for each devices.
        </p>
      </div>
    </div>
  );
}

export default Intro;