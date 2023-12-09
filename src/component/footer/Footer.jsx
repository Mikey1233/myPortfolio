import React from "react";
import "./footer.css";
import sportIcon from "../../Assets/spotify.svg";

const SongLink = ({ songUrl }) => {
  const handleClick = () => {
    window.open(`https://open.spotify.com/track/${songUrl}`, "_blank");
  };

  return (
    <a href="#" onClick={handleClick}>
      <p>City-Boy by Burna-Boy</p>
    </a>
  );
};
function Footer() {
  return (
    <div className="footer">
      <div className="footer-spotify">
        <div className="footer-spotify-bar">
          <img src={sportIcon} alt="spotify icon" />
          <div className="footer-spotify-bar-content">
            <span>On repeat</span>
            <SongLink songUrl={"1OX1aWd5WTavFuOXZ7k6Q5"} />
          </div>
        </div>
        <div className="copy">
          <p> © 2023 Michael Emmanuel • Lagos, Nigeria</p>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-links-lists">
          <p>Elsewhere</p>
          <ul>
            <li>
              <a
                className="footer-a"
                href="https://github.com/Mikey1233"
                target="blank"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="footer-a"
                href="https://twitter.com/MikeyCodes123"
                target="blank"
              >
                twitter
              </a>
            </li>
            <li>
              <a className="footer-a">CV</a>
            </li>
            <li>
              <a
                className="footer-a"
                target="blank"
                href="https://www.linkedin.com/in/emmanuel-michael-b82106260/"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links-contact">
          <p>Contact</p>
          <ul>
            <li>
              <a className="footer-a">Send Message</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
