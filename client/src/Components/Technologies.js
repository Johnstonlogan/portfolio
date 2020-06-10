import React from "react";
import mymog from "../Images/MyMog.png";
import live from "../Images/live.png";
import github from "../Images/github-logo.png";
import moviesearch from "../Images/moviesearch.png";
import { Project } from "../Components/Project";


import "../styling/Technologies.scss";

export const Technologies = () => {
  return (
    <div>
      <div className="Projects-Header">
        <span className="Projects-Header-Text">Projects</span>
        <hr />
      </div>

      <Project
        projectImage={mymog}
        liveImage={live}
        projectTitle={"MyMog.io"}
        githubImage={github}
        details={`Created to allow users to host World of Warcraft Transmog
              tournaments with friends and communities. Project uses React,
              Nodejs/Expressjs, and Postgresql. Full login/logout services using
              JWT for authorization. Hosted using AWS S3 Bucket behind Amazon
              Cloudfront, Nodejs using AWS Lambda functions for serverless use,
              and Postgresql server running on Amazon RDS.`}
        inProgress={true}
        liveLink={"https://www.mymog.io"}
        gitLink={"https://github.com/Johnstonlogan/MyMog"}
      />

      <br />
      <Project
        projectImage={moviesearch}
        liveImage={live}
        projectTitle={"Movie-Search"}
        githubImage={github}
        details={`Created to allow users to search movies, learn movie details such 
        as directors, actors, imdb ratings, and plot. Built using React including 
        React hooks and SCSS. Data derived from OMDB (omdbapi.com) using Axios client
        side and an AWS lambda function to protect api key from being exposed client 
        side. Hosted using AWS S3 Bucket.   `}
        inProgress={false}
        liveLink={"http://moviesearch.info.s3-website-us-west-1.amazonaws.com"}
        gitLink={"https://github.com/Johnstonlogan/movie-search"}
      />
    </div>
  );
};
