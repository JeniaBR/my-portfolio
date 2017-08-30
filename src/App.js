import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import PortfolioModal from './components/PortfolioModal';
import About from './components/About';
import Contact from './components/Contact';
import porfolioData from './make-portfolio';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      projectInfo: {}
    }
  }

  handleModal = (e) => {
    let portfolioItemById = null;
    if (e.target.dataset['portfolioId']) {
      const target = e.target.dataset['portfolioId'];
      portfolioItemById = porfolioData.find((x) => {
        return x.id == target
      });
    }
    if (!this.state.showModal) {
      document.body.className = 'hide-body-scroll';
    } else {
      document.body.className = '';
    }
    this.setState({
      showModal: !this.state.showModal,
      projectInfo: {... portfolioItemById}
    });
  }

  render() {
    return (
      <div className="App">
       <Navbar/>
       <Intro/>
       <Portfolio handleModal={this.handleModal} portfolio={porfolioData}/>
       <About/>
       <Contact/>
       <PortfolioModal projectInfo={this.state.projectInfo} handleModal={this.handleModal} showModal={this.state.showModal} />
      </div>
    );
  }
}

export default App;
