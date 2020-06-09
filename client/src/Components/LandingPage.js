import React from "react";
import scrollDown from "../Images/scroll.png";
import "../styling/LandingPage.scss";

export const LandingPage = (props) => {
  const scrollTo = () =>{
    window.scrollTo(0,769)
  }
  return (
    <div className="Landing-Container">
      <div className="Landing-Info">
        <h1>Logan Johnston</h1>
        <div className="Landing-Text">
          <h4 className="fade-in1">
            Developer
            {/* <img src={developer} /> */}
          </h4>
          <span className="spacer fade-in1">|</span>
          <h4 className="fade-in2">
            Gamer
            {/* <img src={gamer} /> */}
          </h4>
          <span className="spacer fade-in2">|</span>
          <h4 className="fade-in3">
            Philomath
            {/* <img src={team} /> */}
          </h4>
        </div>
      </div>
      {props.scrollPosition <= 15 ? (
        <div className="scroll-down-ind " ><span onClick={() => {scrollTo()}}>About me
          <img src={scrollDown} alt="Scroll-Down" className="bounce"/>
          </span>
        </div>
      ) : null}
    </div>
  );
};
