import React from 'react';
import './PortfolioItem.css';
import pic from '../img/portfolio/cabin.png';

const PortfolioItem = (props) => {
  return(
    <div onClick={props.handleModal} className="portfolio-item">
      <img src={pic} className="img-responsive" alt={props.portfolioItem}/>
      <div className="overlay">
        <i className="fa fa-search-plus fa-5x" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default PortfolioItem;