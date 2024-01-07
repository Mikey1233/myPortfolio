import React from "react";
import "./project.css";
import star from "../../Assets/star-2.svg";
import map from "../../Assets/map-project.png";
import bank from "../../Assets/bank.png";
import movie from "../../Assets/moviebox.png";
import hotdrop from "../../Assets/hotdropLP.png";
import quiz from "../../Assets/quiz.png";
import todo from "../../Assets/todo.png";
import box from '../../Assets/box.png'
import miltron from '../../Assets/preview.png'
import weather from "../../Assets/weather.png"
import "./mainGrid/Maingrid";
import "./minorGrid/Minorgrid";
import Minorgrid from "./minorGrid/Minorgrid";
import Maingrid from "./mainGrid/Maingrid";
import Footer from "../../component/footer/Footer";


function Project() {
  return (
    <div className="project-page">
      <div className="project">
        <div className="project-name">
          <div className="project-content">
            <h3>Projects.</h3>
            <div className="star-pic">
              <img src={star} alt="star" />
            </div>
          </div>
          <div className="project-text">
            <p>
              Discover a mix of useful and unconventional projects I've brought
              to life online.
            </p>
          </div>
          <div></div>
        </div>
        <div className="project-grids">
          <div className="project-grids1">
            <Minorgrid
              text={"track and checkout your workouts with mappy"}
              title={"mappy"}
              pic={map}
              site={'https://mapty-app-nu.vercel.app/'}
            />
            <Minorgrid
              text={"online banking-simulation made specially for kids👱‍♂️"}
              title={"Bank for Kids"}
              pic={bank}
              site={'https://u-ibanking.vercel.app/'}
            />
            <Maingrid
              text={
                "an online platform where users can sign-in,check out movies and also add to their collection"
              }
              title={"Movie box"}
              pic={movie}
              site={'https://movie-box-mikey1233.vercel.app/'}
            />
          </div>
          <div className="project-grids2">
            <Maingrid
              title={"Hotdop Landing Page"}
              pic={hotdrop}
              text={
                "a modern UI/UX design I made with the inspiration gotten from Hotdrop"
              }
              site={'https://hotdrop-lp.vercel.app/'}
            />
            <Minorgrid
              title={"Le Quiz"}
              text={
                " feeling bored..😶,try le quiz.Answer all questions correctly to win"
              }
              pic={quiz}
              site={'https://quiz-game-pi-rust.vercel.app/'}
            />
            <Minorgrid title={'todo-List'} text={" create and add all your simple task to todo_list app..."}
            site={'https://my-todo-app-black.vercel.app/'}
            pic={todo}/>
          </div>
          <div className="project-grids3">
            <Minorgrid check={true} title={'box-drive'} pic={box} text={'upload and add docs to box-drive online cloud platform'}/>
            <Maingrid check={true} title={'Milton Admin dashboard'} pic={miltron} text={'Unleash the potential of Milton. Access and command with the intuitive admin dashboard.'}/>
            <Minorgrid check={true} title={'weather&Me'} pic={weather} text={'check out the weathers of different cities in weather & me'}/>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project