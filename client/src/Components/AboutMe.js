import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import user from "../Images/person.png";
import "../styling/About.scss";

export const AboutMe = () => {
  return (
    <React.Fragment>
      
      <div className="About-Header">
        <span className="About-Header-Text">About</span>
        <hr />
      </div>
      <ScrollAnimation animateIn="slide-in-bottom" animateOut="slide-out-right" >
      <div className="About-Container ">
        <div className="About-Left">
          <img src={user} alt="about" />
        </div>
        <div className="About-Right">
          <p className="About-Right-Text">
            Greetings, my name is Logan. I am a Developer living in San Diego,
            California. After spending some time in the US Navy, I realized my
            passion for troubleshooting. After leaving the Navy I attended a
            coding bootcamp which only furthered my passion for solving problems
            but now I was creating technology that could solve problems for so
            many people too. This feeling of creating new applications out of
            nothing but an idea brought me immeasurable joy and I can’t wait to
            do more
            <br />
            <br />
            Please see the projects I've been working on below. Feel free to
            reach out for a chat, collaboration idea or if you feel I would be a
            good fit for your team. Thank you for checking me out!
          </p>
        </div>
      </div>
      </ScrollAnimation>
     
    </React.Fragment>
  );
};
