import React from 'react';
import PorfolioItem from './PortfolioItem';
import './Porfolio.css';

class Portfolio extends React.Component {
  render() {
    return(
      <section className="portfolio-container">
        <h2>Portfolio</h2>
        {this.props.portfolio.map((item)=>(
          <PorfolioItem key={item.id} id={item.id} handleModal={this.props.handleModal} portfolioItem={item.img}/>
        ))}      
      </section>
    );
  }
}

export default Portfolio;