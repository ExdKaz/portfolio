import React from "react";
import "./skills.css";
function Skills(props) {
  return (
    <div className="skills-container">
      <header className="skills-title" id="skills">
        <span className="skills-icon">{props.iconsList.skills}</span>
        <span id="skills">
          <h2>Skills</h2>
        </span>
      </header>
      <div id="carousel-container">
        <div id="slider-track">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="card skills-list"></div>
    </div>
  );
}

export default Skills;
