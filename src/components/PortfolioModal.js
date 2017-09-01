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
        <h4>Tech Stack</h4>
        <div className="tech-container">
          {projectInfo.technologies.map((techItem) => {
            return (<i className={`devicon-${techItem} colored tech-tag`}></i>)
          })}
        </div>
      </div>
      <div className="btn-container">
        <a href={projectInfo.linkToCode} className="button" role="button">
          <i className="fa fa-github-alt fa-padding" aria-hidden="true"></i>
          Code
        </a>
        <a href={projectInfo.linkToLive} className="button" role="button">
          <i className="fa fa-play-circle fa-padding" aria-hidden="true"></i>
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default PortfolioModal;