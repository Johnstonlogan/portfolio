import React, {  useState, useEffect } from "react";
import "./App.scss";
import { LandingPage } from "./Components/LandingPage";
import user from "./Images/desk.svg"
import webDev from "./Images/web-development.svg"
import { InfoSection } from "./Components/InfoSection";
import {LeftNav} from "./Components/LeftNav"
import {Technologies} from "./Components/Technologies"
import { TopNav } from "./Components/TopNav";

function App() {
    const [scrollPos, setScrollPos] = useState(0);
    const [windowSize, setWindowSize] = useState(0)
    window.addEventListener('scroll', (e) =>{
      setScrollPos(window.scrollY)
    })
    window.addEventListener('resize', (e) =>{
      setWindowSize(window.innerWidth)
     
    } )
useEffect(() => {
  setWindowSize(window.innerWidth)
},[])
 
  return (
    <div className="App">
      {windowSize >= 768 ? 
     <LeftNav /> : <TopNav />}
     
      <div className="app-container">
        <LandingPage scrollPosition={scrollPos} />
        <InfoSection title="About" section={[{text: `  Greetings, my name is Logan. I am a Developer living in San Diego,
            California. After spending some time in the US Navy, I realized my
            passion for troubleshooting. After leaving the Navy I attended a
            coding bootcamp which only furthered my passion for solving problems
            but now I was creating technology that could solve problems for so
            many people too. This feeling of creating new applications out of
            nothing but an idea brought me immeasurable joy and I can’t wait to
            do more. Please see the projects I've been working on below. Feel free to
            reach out for a chat, collaboration idea or if you feel I would be a
            good fit for your team. Thank you for checking me out!`, image: user}]}  />
            {/* <InfoSection title="Skills" section={[{text: `  Greetings, my name is Logan. I am a Developer living in San Diego,
            California. After spending some time in the US Navy, I realized my
            passion for troubleshooting. After leaving the Navy I attended a
            coding bootcamp which only furthered my passion for solving problems
            but now I was creating technology that could solve problems for so
            many people too. This feeling of creating new applications out of
            nothing but an idea brought me immeasurable joy and I can’t wait to
            do more. Please see the projects I've been working on below. Feel free to
            reach out for a chat, collaboration idea or if you feel I would be a
            good fit for your team. Thank you for checking me out!`, image: webDev}, {text: `  Greetings, my name is Logan. I am a Developer living in San Diego,
            California. After spending some time in the US Navy, I realized my
            passion for troubleshooting. After leaving the Navy I attended a
            coding bootcamp which only furthered my passion for solving problems
            but now I was creating technology that could solve problems for so
            many people too. This feeling of creating new applications out of
            nothing but an idea brought me immeasurable joy and I can’t wait to
            do more. Please see the projects I've been working on below. Feel free to
            reach out for a chat, collaboration idea or if you feel I would be a
            good fit for your team. Thank you for checking me out!`, image: webDev}]}  /> */}
        <Technologies />
      </div>
    </div>
  );
}

export default App;
