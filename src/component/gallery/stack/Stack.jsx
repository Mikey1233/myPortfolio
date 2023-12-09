import React from "react";

function Stack({
  title,
  one,
  two,
  three,
  four,
  five,
  six,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  cond,
}) {
  return (
    <div className="stack-content">
      <div className="title">
        <h4>{title}</h4>
      </div>
      <div className="content">
        <p>
          <span> {one} </span>
          <img src={img1} alt="logo" />
        </p>
        <p>
          <span>, {two} </span>
          <img src={img2} alt="logo" />
        </p>
        <p>
          <span>, {three} </span>
          <img src={img3} alt="logo" />
        </p>
        <p>
          <span>, {four} </span>
          <img src={img4} alt="logo" />
        </p>
        {cond && (
          <p>
            <span>, {five} </span>
            <img src={img5} alt="logo" />
          </p>
        )}
          {/* {cond && (
          <p>
            <span>, {six} </span>
            <img src={img6} alt="logo" />
          </p>
        )} */}
      </div>
    </div>
  );
}

export default Stack;
