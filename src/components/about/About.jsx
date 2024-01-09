import React from "react";
import "./about.css";

function About(props) {
  return (
    <section className="aboutMe">
      <header className="aboutMe-title">
        <span className="profile-icon">{props.iconsList.about}</span>
        <span>
          <h2>About Me</h2>
        </span>
      </header>
      <div className="aboutMe-body">
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
    </section>
  );
}

export default About;
