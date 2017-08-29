import React from 'react';
import './PortfolioItem.css';

const PortfolioItem = (props) => {
  return(
    <div onClick={props.handleModal} className="portfolio-item">
      <img src={props.portfolioItem} className="img-responsive" alt={props.portfolioItem}/>
      <div className="overlay">
        <i className="fa fa-white fa-search-plus fa-5x" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default PortfolioItem;