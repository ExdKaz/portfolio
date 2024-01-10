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
} from "@fortawesome/free-solid-svg-icons";

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
  };
  return (
    <>
      <Toolbar iconsList={icons} />
      <Intro />
      <About iconsList={icons} />
    </>
  );
}

export default App;
