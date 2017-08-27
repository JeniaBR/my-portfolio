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
      portfolio: ["cabin", "cake", "circus", "game", "safe", "submarine"]
    }
  }
  render() {
    return (
      <div className="App">
       <Navbar/>
       <AboutMe/>
       <Portfolio portfolio={this.state.portfolio}/>
       <PortfolioModal/>
      </div>
    );
  }
}

export default App;
