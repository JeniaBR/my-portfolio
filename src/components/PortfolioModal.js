import React from 'react';
import './PortfolioModal.css';

const PortfolioModal = (props) => {
  const {showModal, handleModal, projectInfo} = props;
  if (!showModal) {
    return null;
  }
  return(
    <div className="modal-container">
      <div className="close-btn-container">
        <i onClick={handleModal} className="fa fa-times fa-4x" aria-hidden="true"></i>
      </div>
      <div className="modal-body">
        <h2>{projectInfo.title}</h2>
        <img src={projectInfo.img} className="img-responsive" alt="some alt from props"/>
        <p>{projectInfo.description}</p>
        <div>{projectInfo.technologies}</div>
        <div className="btn-container">
          <button>Live</button>
          <button>Code</button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioModal;