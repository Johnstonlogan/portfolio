import React from "react";
import mymog from "../Images/MyMog.png";
import live from "../Images/live.png";
import github from "../Images/github-logo.png";
import ScrollAnimation from 'react-animate-on-scroll';

import "../styling/Technologies.scss";

export const Technologies = () => {
  return (
    <React.Fragment>
      <div className="Projects-Header">
        <span className="Projects-Header-Text">Projects</span>
        <hr />
      </div>
        <ScrollAnimation animateIn="slide-in-bottom" animateOut="slide-out-right">
      <div className="Projects-Container">
        <div className="Project1">
          <div className="Project1-Left">
            <img src={mymog} />
          </div>
          <div className="Project1-Right">
            <a href="https://www.mymog.io" target="blank">
              <h6 className="Project-Title">
                MyMog.io - <i>in progress</i>
              </h6>
            </a>
            <p>
              Created to allow users to host World of Warcraft Transmog
              tournaments with friends and communities. Project uses React,
              Nodejs/Expressjs, and Postgresql. Full login/logout services using
              JWT for authorization. Hosted using AWS S3 Bucket behind Amazon
              Cloudfront, Nodejs using AWS Lambda functions for serverless use,
              and Postgresql server running on Amazon RDS.
            </p>
            <div className="Project1-Links">
            
              <a href="https://www.mymog.io" target="blank" ><img src={live} /></a>
               <a href="https://github.com/Johnstonlogan/MyMog" target="_blank"><img src={github} /></a>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </React.Fragment>
  );
};
