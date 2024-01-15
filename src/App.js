import "./App.css";
import Toolbar from "./components/toolbar/Toolbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGear,
  faLaptopCode,
  faAddressCard,
  faArrowRight,
  faCircle,
  faBars,
  faXmark,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
// import Projects from "./components/projects/Projects";

function App() {
  const icons = {
    profile: <FontAwesomeIcon icon={faUser} style={{ color: "#00bcd4" }} />,
    skills: <FontAwesomeIcon icon={faGear} style={{ color: "#00bcd4" }} />,
    projects: (
      <FontAwesomeIcon icon={faLaptopCode} style={{ color: "#00bcd4" }} />
    ),
    contact: (
      <FontAwesomeIcon icon={faAddressCard} style={{ color: "#00bcd4" }} />
    ),
    about: (
      <FontAwesomeIcon icon={faAddressCard} style={{ color: "#00bcd4" }} />
    ),
    arrow: <FontAwesomeIcon icon={faArrowRight} style={{ color: "#00bcd4" }} />,
    circle: <FontAwesomeIcon icon={faCircle} style={{ color: "#00bcd4" }} />,
    list: <FontAwesomeIcon icon={faBars} style={{ color: "#00bcd4" }} />,
    close: <FontAwesomeIcon icon={faXmark} style={{ color: "#00bcd4" }} />,
    download: (
      <FontAwesomeIcon icon={faDownload} style={{ color: "#00bcd4" }} />
    ),
  };
  return (
    <>
      <Toolbar iconsList={icons} />
      <Intro />
      <About iconsList={icons} />
      <Skills iconsList={icons} />
      {/* <Projects /> */}
      <Contact iconsList={icons} />
    </>
  );
}

export default App;
