import React, { Component } from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import PortfolioModal from './components/PortfolioModal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: ["cabin", "cake", "circus", "game", "safe", "submarine"],
      showModal: false,
    }
  }

  handleModal = () => {
    if (!this.state.showModal) {
      document.body.className = 'hide-body-scroll';
    } else {
      document.body.className = '';
    }
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <div className="App">
       <Navbar/>
       <AboutMe/>
       <Portfolio handleModal={this.handleModal} portfolio={this.state.portfolio}/>
       <PortfolioModal handleModal={this.handleModal} showModal={this.state.showModal} />
      </div>
    );
  }
}

export default App;
