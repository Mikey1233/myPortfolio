import React from "react";
import star from "../../Assets/star-2.svg";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="name">
        <div className="name-content">
          <div className="star1" >
            <img src={star} alt="star" />
          </div>

          <h3>Hi. I'm Michael.</h3>
          <h3>A Web Developer.</h3>
          <div className="star2">
            <img src={star} alt="star"  />
          </div>
        </div>

        <div className="home-text">
          <p>
            I'm passionate about crafting experiences that are engaging,
            accessible, and user-centric.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
