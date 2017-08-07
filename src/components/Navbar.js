import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render(){
    return(
      <nav className="navbar-container">
        <div className="mobile-wrapper">
          <div className="my-name">Jenia Brook</div>
          <div className="hamburger-menu">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </div>
        </div>
        <div className="nav-links">
          <a href="#">porfolio</a>
          <a href="#">about</a>
          <a href="#">contact</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;