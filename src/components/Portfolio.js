import React from 'react';
import PorfolioItem from './PortfolioItem';
import './Porfolio.css';

class Portfolio extends React.Component {
  render() {
    return(
      <section className="portfolio-container">
        <h2>Portfolio</h2>
        This is My awesome portfolio :) 
        {this.props.portfolio.map((item)=>(
          <PorfolioItem handleModal={this.props.handleModal} portfolioItem={item}/>
        ))}      
      </section>
    );
  }
}

export default Portfolio;