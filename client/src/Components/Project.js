import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../styling/Technologies.scss";

export const Project = (props) => {
  return (
   <div>
      <div className="Projects-Container">
        <div className="Project1">
          <div className="Project1-Left">
            <img src={props.projectImage} />
          </div>
          <div className="Project1-Right">
           
            <a href={props.liveLink} target="blank">
              <h6 className="Project-Title">
                {props.projectTitle}
                {props.inProgress ? <i>- in progress</i> : null}
              </h6>
            </a>
            
            <div>
            <p>{props.details}</p>
            </div>
            <div className="Project1-Links">
              <a href={props.liveLink} target="blank">
                <img src={props.liveImage} />
              </a>
              <a href={props.gitLink} target="_blank">
                <img src={props.githubImage} />
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};
