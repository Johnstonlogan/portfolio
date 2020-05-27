import React from "react";
import "./App.scss";
import { LandingPage } from "./Components/LandingPage";
import { AboutMe } from "./Components/AboutMe";
import github from "../src/Images/github.png";
import linkedin from "../src/Images/linkedin.png";
import resume from "../src/Images/resume.png";
import {Technologies} from "./Components/Technologies"

function App() {
  return (
    <div className="App">
      <div className="Left-Margin">
        <a target="_blank" href="https://github.com/Johnstonlogan" rel="noopener noreferrer"><img src={github} alt="github" /></a>
       <a target="_blank" href="https://www.linkedin.com/in/logan-johnston-58b08a152/" rel="noopener noreferrer"> <img src={linkedin} alt="linkedin" /></a>
       <a  target="_blank" href="https://docs.google.com/document/d/1EI_3h0uLJdE_tY5LrUYO0tFNRnunKv1xQ5WGCt2meRg/edit" rel="noopener noreferrer"> <img src={resume} alt="resume" /> </a>
      </div>
      {/* <HamburgerButton /> */}
      <div className="app-container">
        <LandingPage />
        <AboutMe />
        <Technologies />
      </div>
    </div>
  );
}

export default App;
