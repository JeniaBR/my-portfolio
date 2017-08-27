import React from 'react';
import './PortfolioItem.css';
import pic from '../img/portfolio/cabin.png';

const PortfolioItem = (props) => {
  return(
    <div className="portfolio-item">
      <img src={pic} className="img-responsive" alt={props.portfolioItem}/>
    </div>
  );
}

export default PortfolioItem;