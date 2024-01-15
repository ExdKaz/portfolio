import React from "react";
import "./skills.css";
import Progress from "../progress/Progress";
function Skills(props) {
  const skillList = [
    { name: "Javascript", value: 75 },
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
    </div>
  );
}

export default Skills;
