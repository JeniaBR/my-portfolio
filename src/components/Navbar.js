import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
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
    this.portrfolioSection = document.getElementById('portfolio');
    this.aboutSection = document.getElementById('about');
    this.contactSection = document.getElementById('contact');
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

  handleSmoothScrolling = (ref) => {
    scrollToComponent(ref, { offset: -50, align: 'top', duration: 1500});
    this.setState({
      hideMenu: true
    });
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
          <div><a onClick={() => this.handleSmoothScrolling(this.portrfolioSection)}>portfolio</a></div>
          <div><a onClick={() => this.handleSmoothScrolling(this.aboutSection)}>about</a></div>
          <div><a onClick={() => this.handleSmoothScrolling(this.contactSection)}>contact</a></div>
        </div>
      </nav>
    );
  }
}

export default Navbar;