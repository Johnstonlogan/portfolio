import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import user from "../Images/desk.svg";
import "../styling/About.scss";

export const AboutMe = () => {
  return (
    <div className="about">
      
      <div className="about__header">
        <span className="About-Header-Text">About</span>
        <hr />
      </div>
      
      <div className="about__container ">
        <div className="about__left">
          <ScrollAnimation className="about__image" animateIn="slide-in-left">
          <img src={user} alt="about" />
          </ScrollAnimation>
        </div>
        
        <div className="About-Right">
          <ScrollAnimation animateIn="slide-in-right">
          <p className="About-Right-Text">
            Greetings, my name is Logan. I am a Developer living in San Diego,
            California. After spending some time in the US Navy, I realized my
            passion for troubleshooting. After leaving the Navy I attended a
            coding bootcamp which only furthered my passion for solving problems
            but now I was creating technology that could solve problems for so
            many people too. This feeling of creating new applications out of
            nothing but an idea brought me immeasurable joy and I can’t wait to
            do more
            <br/>
            <br/>
            Please see the projects I've been working on below. Feel free to
            reach out for a chat, collaboration idea or if you feel I would be a
            good fit for your team. Thank you for checking me out!
          </p>
          </ScrollAnimation>
        </div>
      
      </div>
     
     
      </div>
  );
};
