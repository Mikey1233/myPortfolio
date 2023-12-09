import React from "react";
import './inProgress.css'
import prev from '../../Assets/preview.png'
import phone from '../../Assets/hotdrop.png'
function Inprogress() {
  return (
    <div className="progress">
      <div className="progress-title">
        <h3>In Progress.</h3>
        <p>
          Work in various states of design and development, from side projects,
          to in-flight product design and development.
        </p>
      </div>
      <div className="progress-content">
          <div className="box-1">
            <div className="box-1-content">
              <small>Dash Board</small>
              <h3>Milton Admin Board</h3>
            </div>
          
          <img src={prev} alt="logo"/>
          </div>
          <div className="box-2">
        
            <div className="box-2-content">
              <small>Landing Page</small>
              <h3>Hotdrop</h3>
            </div>
          <img src={phone} alt="logo"/>
          
        

          </div>
      </div>
    </div>
  );
}

export default Inprogress;
