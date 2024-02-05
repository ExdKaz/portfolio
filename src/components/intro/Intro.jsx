/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./intro.css";

function Intro() {
  return (
    <div className="intro-container">
      <div className="intro-detail">
        <h4>Welcome to my Portfolio</h4>
        <h2>HI! I am Abhishek Rana</h2>
        <div className="animated-text">
          <h3>A</h3>
          <div className="text-animation">
            <h3 className="box1 box">Frontend Developer</h3>
            <h3 className="box2 box">UI Designer</h3>
          </div>
        </div>
        <div className="para">
          An innovative, purpose-driven engineer contributed my learning into
          building web applications & solutions for enterprises. Seeking to work
          in a professional ambiance that provides a space to contribute my
          skills towards the growth of the organization.
        </div>
      </div>
      <div className="image scale-in-center"></div>
    </div>
  );
}

export default Intro;
