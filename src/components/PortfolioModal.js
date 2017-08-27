import React from 'react';
import './PortfolioModal.css';
import pic from '../img/portfolio/cabin.png';

const PortfolioModal = (props) => {
  return(
    <div className="modal-container">
      <div className="modal-body">
        <h2>Some Title From Props</h2>
        <img src={pic} className="img-responsive" alt="some alt from props"/>
        <p>Lorem ipsum dolor sit amet, id mei liber dicit fabulas. Inimicus molestiae similique pri ne, ei ceteros oportere est, oblique nostrum ne nec. Ea partiendo consequat ius. At est fabulas quaestio.</p>
        <div>The technology that is used in this project</div>
        <div className="button-container">
          <button>Live</button>
          <button>Code</button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioModal;