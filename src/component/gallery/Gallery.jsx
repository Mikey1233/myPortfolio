import React from "react";
// import Stack from "./stack/Stack";
import "./gallery.css";
import jv from "../../Assets/jv.svg";
import css from "../../Assets/css.svg";
import html from "../../Assets/html.svg";
import tail from "../../Assets/tail.svg";
//component
import Stack from "./stack/Stack";
//tool svg's
import github from "../../Assets/github.svg";
import fire from "../../Assets/fire.svg";
import type from "../../Assets/type.svg";
import re from "../../Assets/react.svg";
import vite from "../../Assets/vite.svg";
//other skills
import com from "../../Assets/com.svg";
import design from "../../Assets/design.svg";
import collab from "../../Assets/collab.svg";
import res from "../../Assets/responsive.svg";


function Gallery() {
 
  
  return (
    <div className="gallery-stack">
      <div className="gallery-stack-title">
        <h3>My Tech Stack</h3>
      </div>
      <div className="gallery-stack-content">
        <Stack
          title={"Technologies"}
          one={"JAVASCRIPT"}
          img1={jv}
          two={"CSS"}
          img2={css}
          three={"TAILWINDCSS"}
          img3={tail}
          four={"HTML"}
          img4={html}
          cond={false}
        />
        <Stack
          title={"Frameworks & Tools"}
          one={"Reactjs"}
          img1={re}
          two={"Typescript"}
          img2={type}
          three={"Github"}
          img3={github}
          four={"Firebase"}
          img4={fire}
          five={"Vite"}
          img5={vite}
          cond={true}
        />
        <Stack
          title={"Other Skills"}
          one={"responsive designs"}
          img1={res}
          two={"Team work"}
          img2={collab}
          three={"Good communication"}
          img3={com}
          four={"Wed design"}
          img4={design}
          cond={false}
        />
      </div>
    </div>
  );
}

export default Gallery;
