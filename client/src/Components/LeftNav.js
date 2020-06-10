import React from 'react'
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";
import resume from "../Images/resume.png";
import "../App.scss";

export const LeftNav = () => {
    return(
        <nav className="left-nav">
        <div className="left-nav__links">
        <a target="_blank" href="https://github.com/Johnstonlogan" rel="noopener noreferrer"><img src={github} alt="github" title="Github" /></a>
       <a target="_blank" href="https://www.linkedin.com/in/logan-johnston-58b08a152/" rel="noopener noreferrer"> <img src={linkedin} alt="linkedin" title="Linkedin" /></a>
       <a  target="_blank" href="https://docs.google.com/document/d/1EI_3h0uLJdE_tY5LrUYO0tFNRnunKv1xQ5WGCt2meRg/edit" rel="noopener noreferrer"> <img src={resume} alt="resume" title="Resume"/> </a>
       </div>
      </nav>
    )
}