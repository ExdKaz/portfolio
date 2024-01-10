/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./toolbar.css";

function Toolbar(props) {
  return (
    <>
      <div className="toolbar shadow " data-bs-theme="dark">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="nav-brand" href="#">
              PORTFOLIO
            </a>
            <div className="nav-rignt-content">
              <ul className="navbar-nav">
                <li className="nav-item u-l">
                  <span>{props.iconsList.profile}</span>
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#about-book"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item u-l">
                  <span>{props.iconsList.skills}</span>
                  <a className="nav-link" href="#">
                    Skills
                  </a>
                </li>
                <li className="nav-item u-l">
                  <span>{props.iconsList.projects}</span>
                  <a className="nav-link" href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item u-l">
                  <span>{props.iconsList.contact}</span>
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <button type="button" className="cv-button btn ">
                    Download CV
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Toolbar;
