import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import "../styling/Technologies.scss";

export const Project = (props) => {
  return (
    
      <div className="project">
       
          <div className="project__left">
            <img src={props.projectImage} alt={props.projectTitle} />
          </div>
         
          <div className="project__right">
            <h6 className="project__title">
              <a href={props.liveLink} target="blank" rel="noopener noreferrer">
                {props.projectTitle}

                {props.inProgress ? <i>- in progress</i> : null}
              </a>
            </h6>

            <div>
              <p>{props.details}</p>
            </div>
            <div className="project__links">
              <a href={props.liveLink} target="blank" rel="noopener noreferrer">
                <LiveTvIcon className="link" />
              </a>
              <a href={props.gitLink} target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="link" />
              </a>
            </div>
          </div>
         
      
      </div>
    
  );
};
