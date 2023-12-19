import React from "react";
import "./about.css";
import Footer from "../../component/footer/Footer";
import emma from "../../Assets/emmanuel.jpg";
import lagos from "../../Assets/lagos3.jpg";
import sportIcon from "../../Assets/spotify.svg";
import { useState } from "react";
import GithubComp from "../../component/githubComp/GithubComp";

const dataContent = [
  {
    num: "01",
    title: "Make it",
    content: `My first goal is to create a contemporary 
    aesthetic piece that embodies your business's or personal 
    style and vibe. I make use of top-notch images in my designs 
    and use contemporary tools into my work to guarantee that your 
    project is optimised for all devices and is responsive`,
  },
  {
    num: "02",
    title: "Collaboration",
    content: `In an environment of shared space, iterative feedback and cooperation 
    foster the growth of great design. I think it's important to actively involve 
    stakeholders in the design process and to create a welcoming,
     collaborative atmosphere that promotes candid communication.`,
  },
  {
    num: "03",
    title: "Accessibility",
    content: `In my design process, accessibility is a fundamental
     principle rather than merely a feature. My goal with every product 
    I develop is to make it useful to everyone, not just a chosen few.`,
  },
  {
    num: "04",
    title: "Keep experimenting",
    content: `Everything I make is open to testing and modification.
     While not everything will succeed, 
    it's still worthwhile to attempt and gain knowledge from the failures.`,
  },
];

const Board = ({ num, title, content }) => {
  return (
    <div className="about-board-content">
      <span>{num}</span>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};
function About() {
  const [center, setCenter] = useState({ lat: 6.453061, lng: 3.395833 }); //[, ]

  const [anime, setAnime] = useState(false);
  return (
    <div className="about">
      <div className="about-intro">
        <div className="about-intro-title">
          <h3>I'm Micháel.</h3>
        </div>
        <div className="about-intro-content">
          <div className="about-intro-img">
            <img src={emma} alt="my-pic" />
            <div className="about-spotify-bar">
              <img src={sportIcon} alt="spotify icon" />
              <div className="about-spotify-bar-content">
                <span>My favorite</span>
                <a
                  href="https://open.spotify.com/track/0otRX6Z89qKkHkQ9OqJpKt"
                  target="blank"
                >
                  car's outside by James Authur
                </a>
              </div>
            </div>
          </div>
          <div className="about-intro-text">
            <h4>
              I'm a Frontend developer and freelancer, from 34°C Lagos 
              Nigeria.
            </h4>
            <p>
              Over the past years, I've worked in various areas of the tech
              space, including front-end development, email, UI/UX, and
              blogging. I'm passionate about providing solutions to users and
              client by building accessible products.
            </p>
          </div>
        </div>
      </div>

      <div className="about-collab">
        <div className="about-collab-content">
          <h3>My Guiding Principles</h3>
          <p>
            I combine the freedom of personality, diligence and integrity to
            design accessible and usable products. Striving daily to offer the
            best digital design solutions to users and organizations. I
            collaborate closely with a diverse team, and devote my heart and
            souls to my works, and the outcomes speak for themselves.
          </p>
        </div>
      </div>

      <div className="about-board">
        {dataContent.map((arr) => (
          <Board title={arr.title} num={arr.num} content={arr.content} />
        ))}
      </div>

      <div className="about-me">
        <div className="about-me-content">
          <p>
            I started off as a web developer writing emails before there were
            email linters. It was a moment of crossed fingers and fervent
            prayers, hoping your invention would arrive at its target intact.
          </p>
          <p>
            I developed a thorough understanding of HTML and CSS from this
            practical experience, which I have carefully maintained. My current
            side initiatives stem from my intense interest about the newest
            technology and the constantly changing internet, not from mere
            hobbies.
          </p>
          <p>
            When I'm not making, I can be found enjoying playing football
            outside my house, listening to music, exploring the tech world with
            my friends, or hanging around with my little brother, Marvel.
          </p>
        </div>
      </div>
      <div className="about-gallery">
        <div
          className="about-gallery-box1"
          onMouseEnter={() => setAnime(true)}
          onMouseLeave={() => setAnime(false)}
        >
          <img src={lagos} alt="lagos" />
          <p className={anime && "active"}>Lagos Island,Nigeria</p>
        </div>
        <div className="about-gallery-box2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253691.8624261181!2d3.1983639273756457!3d6.529849705188973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a3999%3A0xd7a8324bddbba1f0!2sIkeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1702326286870!5m2!1sen!2sng"
           
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
             <div className="github-details">
              <GithubComp username={'mikey1233'}/>
             </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
