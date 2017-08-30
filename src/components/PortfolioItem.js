import React from 'react';
import './PortfolioItem.css';

const PortfolioItem = (props) => {
  return(
    <div onClick={(e) => props.handleModal(e)} className="portfolio-item">
      <img src={props.portfolioItem} className="img-responsive" alt={props.portfolioItem}/>
      <div data-portfolio-id={props.id} className="overlay">
        <i data-portfolio-id={props.id} className="fa fa-white fa-search-plus fa-5x" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default PortfolioItem;