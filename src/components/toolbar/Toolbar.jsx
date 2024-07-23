/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useRef, useState } from "react";
import "./toolbar.css";
import resume from "../../../src/Abhishek_Rana_Resume.pdf";

function Toolbar(props) {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const dropdownMenuRef = useRef();

  function toggleDropdownMenu(e) {
    let ele = dropdownMenuRef.current;
    console.log(isDropDownVisible);
    if (isDropDownVisible) {
      ele.style.height = "0";
      setIsDropDownVisible(false);
    } else {
      setIsDropDownVisible(true);
      ele.style.height = "10rem";
    }
  }

  const downloadResume = () => {
    const url = resume;
    const link = document.createElement("a");
    link.href = url;
    link.download = "Abhishek_Rana_Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(link.download, link.href, document.body, link);
  };

  return (
    <>
      <div className="toolbar shadow " data-bs-theme="dark">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="nav-brand focus-in-expand" href="#">
              PORTFOLIO
            </a>
            <div className="nav-rignt-content">
              <ul className="navbar-nav focus-in-expand">
                <li className="nav-item u-l">
                  <span>{props.iconsList.profile}</span>
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#about-bm"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item u-l">
                  <span>{props.iconsList.skills}</span>
                  <a className="nav-link" href="#skills-bm">
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
                  <a className="nav-link" href="#contact-book">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="cv-button btn "
                    onClick={downloadResume}
                  >
                    Download CV
                  </button>
                </li>
              </ul>

              {/* navbar for smaller screen */}
              <div className="resp-button focus-in-expand">
                <div className="cv-icon c" onClick={downloadResume}>
                  <span>CV</span>
                  <span className="c">{props.iconsList.download}</span>
                </div>
                <button
                  type="button"
                  className="cv-button btn "
                  id="nav-dropdown-btn"
                  onClick={toggleDropdownMenu}
                >
                  {!isDropDownVisible ? (
                    <span>{props.iconsList.list}</span>
                  ) : (
                    <span>{props.iconsList.close}</span>
                  )}
                </button>
              </div>
              <div id="nav-dropdown-list" ref={dropdownMenuRef}>
                <ul className="navbar-nav  responsive-nav">
                  <div className="padd">
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
                      <a className="nav-link" href="#skills">
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
                      <a className="nav-link" href="#contact-book">
                        Contact
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Toolbar;
