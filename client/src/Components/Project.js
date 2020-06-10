import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LiveTvIcon from '@material-ui/icons/LiveTv';
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
           
            
              <h6 className="Project-Title">
              <a href={props.liveLink} target="blank">
                {props.projectTitle}
                
                {props.inProgress ? <i>- in progress</i> : null}
                </a>
              </h6>
           
            
            <div>
            <p>{props.details}</p>
            </div>
            <div className="Project1-Links">
              <a href={props.liveLink} target="blank">
                <LiveTvIcon className="link" />
              </a>
              <a href={props.gitLink} target="_blank">
                <GitHubIcon  className="link"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};
