import React from 'react';
import './PortfolioModal.css';
import pic from '../img/portfolio/cabin.png';

const PortfolioModal = (props) => {
  if (!props.showModal) {
    return null;
  }
  return(
    <div className="modal-container">
      <div className="modal-body">
        <div onClick={props.handleModal} className="close-btn-container">
          X
        </div>
        <h2>Some Title From Props</h2>
        <img src={pic} className="img-responsive" alt="some alt from props"/>
        <p>Lorem ipsum dolor sit amet, id mei liber dicit fabulas. Inimicus molestiae similique pri ne, ei ceteros oportere est, oblique nostrum ne nec. Ea partiendo consequat ius. At est fabulas quaestio.</p>
        <p>Lorem ipsum dolor sit amet, id mei liber dicit fabulas. Inimicus molestiae similique pri ne, ei ceteros oportere est, oblique nostrum ne nec. Ea partiendo consequat ius. At est fabulas quaestio.</p>
        <p>Lorem ipsum dolor sit amet, id mei liber dicit fabulas. Inimicus molestiae similique pri ne, ei ceteros oportere est, oblique nostrum ne nec. Ea partiendo consequat ius. At est fabulas quaestio.</p>
        <p>Lorem ipsum dolor sit amet, id mei liber dicit fabulas. Inimicus molestiae similique pri ne, ei ceteros oportere est, oblique nostrum ne nec. Ea partiendo consequat ius. At est fabulas quaestio.</p>
        <p>Lorem ipsum dolor sit amet, id mei liber dicit fabulas. Inimicus molestiae similique pri ne, ei ceteros oportere est, oblique nostrum ne nec. Ea partiendo consequat ius. At est fabulas quaestio.</p>
        <p>Lorem ipsum dolor sit amet, id mei liber dicit fabulas. Inimicus molestiae similique pri ne, ei ceteros oportere est, oblique nostrum ne nec. Ea partiendo consequat ius. At est fabulas quaestio.</p>
        <div>The technology that is used in this project</div>
        <div className="btn-container">
          <button>Live</button>
          <button>Code</button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioModal;