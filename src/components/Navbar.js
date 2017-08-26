import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false,
      hideMenu: false
    }
  }

  componentDidMount() {
    if (window.innerWidth < 769) {
      this.setState({
        mobile: true,
        hideMenu: true
      });
    }
    window.addEventListener('resize', this.handleResizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResizeWindow);
  }

  handleResizeWindow = () => {
    if (window.innerWidth < 769) {
      this.setState({
        mobile: true
      });
    } else {
      this.setState({
        mobile: false
      });
    }
  }

  handleHamburgerMenu = () => {
    const currentHideMenu = this.state.hideMenu;
    this.setState({
      hideMenu: !currentHideMenu
    }); 
  }

  render(){
    return(
      <nav onClick={this.handelResizeWindow} className="navbar-container">
        <div className="mobile-wrapper">
          <div className="my-name">Jenia Brook</div>
          <div onClick={this.handleHamburgerMenu} className={`hamburger-menu ${this.state.hideMenu ? '' : 'hamburger-animation'}`}>
            <div className="hamburger"></div>
          </div>
        </div>
        <div className={`nav-links ${(this.state.hideMenu && this.state.mobile) ? 'hide' : 'show'}`}>
          <div><a href="#">portfolio</a></div>
          <div><a href="#">about</a></div>
          <div><a href="#">contact</a></div>
        </div>
      </nav>
    );
  }
}

export default Navbar;