import React from "react";
import "./skills.css";
import Progress from "../progress/Progress";
function Skills(props) {
  const skillList = [
    { name: "Javascript", value: 70 },
    { name: "Angular", value: 75 },
    { name: "React", value: 70 },
    { name: "Github", value: 70 },
  ];
  return (
    <div className="skills-container" id="skills-bm">
      <header className="skills-title">
        <span className="skills-icon">{props.iconsList.skills}</span>
        <span id="skills">
          <h2>Skills</h2>
        </span>
      </header>
      <div id="carousel-container">
        <div id="slider-track">
          <div className="images-div">
            <img src="./skills-logo/html-5.png" alt="Html-logo" />
          </div>
          <div className="images-div">
            <img src="./skills-logo/css-3.png" alt="Css-logo" />
          </div>
          <div className="images-div">
            <img src="./skills-logo/js.png" alt="Js-logo" />
          </div>
          <div className="images-div">
            <img src="./skills-logo/angular.png" alt="Angular-logo" />
          </div>
          <div className="images-div">
            <img src="./skills-logo/physics.png" alt="React-logo" />
          </div>
          <div className="images-div">
            <img src="./skills-logo/material.png" alt="Material-logo" />
          </div>
          <div className="images-div">
            <img src="./skills-logo/chartjs.png" alt="Chartjs-logo" />
          </div>
          <div className="images-div">
            <img src="./skills-logo/bootstrap.png" alt="Bootstrap-logo" />
          </div>
          <div className="images-div">
            <img src="./skills-logo/github.png" alt="Github-logo" />
          </div>
        </div>
      </div>
      <div className=" skills-list">
        <div className="skill-item">
          {skillList.map((skill) => {
            // console.log(skill);
            return (
              <div className="skill-div" key={skill.name}>
                <span>{skill.name}</span>
                <span>
                  <Progress skills={skillList} />
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Skills;
