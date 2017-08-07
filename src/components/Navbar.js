import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render(){
    return(
      <nav className="navbar-container">
        <div className="my-name">Jenia Brook</div>
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