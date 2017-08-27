import React, { Component } from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar/>
       <AboutMe/>
       <Portfolio/>
      </div>
    );
  }
}

export default App;
