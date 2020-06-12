import React, { useState, useEffect } from "react";
import "./App.scss";
import { LandingPage } from "./Components/LandingPage";
import user from "./Images/desk.svg";
import webDev from "./Images/web-development.svg";
import frontend from "./Images/frontend.svg";
import backend from "./Images/backend.svg";
import deployment from "./Images/deployment.svg";
import { InfoSection } from "./Components/InfoSection";
import { LeftNav } from "./Components/LeftNav";
import { Technologies } from "./Components/Technologies";
import { TopNav } from "./Components/TopNav";
import { Skills } from "./Components/Skills";

function App() {
  const [scrollPos, setScrollPos] = useState(0);
  const [windowSize, setWindowSize] = useState(0);

  window.addEventListener("scroll", () => {
    setScrollPos(window.scrollY);
  });
  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });
  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return (
    <div className="app">
      {windowSize >= 768 ? <LeftNav /> : <TopNav />}

      <div className="app-container">
        <LandingPage scrollPosition={scrollPos} />
        <InfoSection
          title="About"
          section={[
            {
              text: `Greetings, my name is Logan. I am a Developer living in San Diego,
            California. After spending some time in the US Navy, I realized my
            passion for troubleshooting. After leaving the Navy I attended a
            coding bootcamp which only furthered my passion for solving problems
            but now I was creating technology that could solve problems for so
            many people too. This feeling of creating new applications out of
            nothing but an idea brought me immeasurable joy and I can’t wait to
            do more. `,
              image: user,
              header: "Me",
            },
            {
              text: `  I started coding to pass the time while being out to sea while serving in the navy. I used to make console-based decision games using C++ and 
            had my shipmates try them out, I even programmed a D&D campaign with a built-in
             dice function. Once I decided it was my time to leave the navy, I knew I wanted
              to do something as a developer. This led me to Antioch University who was
               partnered with Sabio coding bootcamp, a school that excepted the GI bill and allowed
                
               me to learn the basics of web development at a fast pace. `,
              image: webDev,
              header: "Coding",
            },
          ]}
        />
        <Skills
          cardInfo={[
            {
              image: frontend,
              title: "Frontend",
              content: ["React", "React Hooks", "HTML", "CSS", "Sass"],
            },
            {
              image: backend,
              title: "Backend",
              content: [
                "NodeJS",
                "Express",
                "Postgresql",
                "AWS Lambda",
                "API Gateway",
              ],
            },
            {
              image: deployment,
              title: "Deployment",
              content: [
                "S3 Bucket",
                "AWS",
                "Cloudfront",
                "Amazon RDS",
                "Route53",
              ],
            },
          ]}
        />
        <Technologies />
      </div>
    </div>
  );
}

export default App;
