/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import "./about.css";

function About(props) {
  const [isDivExpanded, setIsDivExpanded] = useState(false);

  const onExpandClick = (e) => {
    const aboutMeDiv = document.getElementById("about");

    if (e.target.value === "read-more") {
      setIsDivExpanded(true);
      if (screen.width <= 700) aboutMeDiv.style.height = "52.5rem";
      else aboutMeDiv.style.height = "26.25rem";
    } else {
      setIsDivExpanded(false);
      aboutMeDiv.style.height = "12.5rem";
    }
  };

  return (
    <section className="aboutMe">
      <header className="aboutMe-title">
        <span className="profile-icon">{props.iconsList.about}</span>
        <span id="about-book">
          <h2>About Me</h2>
        </span>
      </header>
      <div id="about" className="aboutMe-body">
        <p>
          {
            "Motto : \"It's better to light a candle than to curse the darkness\
            && \"Failures aren't opposite of success they're the part of it\""
          }
        </p>
        <br />
        <p>
          {
            "A passionate, persistent, purpose driven person always keen and\
            ready to learn new things. Completed my degree with honors in\
            Information Science from HKBK College of Engineering,\
            Bengaluru, Karnataka."
          }
        </p>
        <br />
        <p>
          {
            "During my college time span I grew a ample interest in programming &\
            learning new tech-stacks which pushed me to work on different\
            projects and gain practical skill-set. I was also a active participant in extra-curricular activities such\
            as Sports and Technical Events which helped me become a good team\
            worker and improved my soft skills part."
          }
        </p>
        <br />

        <p>
          {
            "At present, I am working in an MNC at the position of Full Stack\
            Developer and I love my job. I love when my fingers run on keyboard\
            to write code, I love when my brain is busy finding out the solution\
            of the bug. Here, in my current company, I have learned a lot, met\
            new people, networked with them and gained a lot of new skills."
          }
        </p>
      </div>
      {!isDivExpanded ? (
        <button
          type="button"
          value="read-more"
          className=" readMore-btn btn "
          onClick={onExpandClick}
        >
          Read More...
        </button>
      ) : (
        <button
          type="button"
          value="close"
          className=" readMore-btn btn "
          onClick={onExpandClick}
        >
          Close
        </button>
      )}

      <div className="education-work-container">
        <div className="edu-heading">
          <h2>Education</h2>
          <div className="education-card card shadow">
            <ul id="education-list">
              <li className="education-item">
                <h5>Bachelor of Engineering</h5>
                <div>- HKBK College of Engineering, Bangalore</div>
                <div>- 2017-2021</div>
              </li>

              <li className="education-item">
                <h5>Senior Secondary</h5>
                <div>- Narayana PU College, Bangalore</div>
                <div>- 2016</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="work-heading">
          <h2>Experience</h2>
          <div className="work-card card shadow">
            <ul id="experience-list">
              <li>
                <h5>Frontend Developer</h5>
                <div>- Capgemini India Private Limited</div>
                <div>- 2021-Current</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
