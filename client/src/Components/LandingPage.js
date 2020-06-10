import React from "react";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "../styling/LandingPage.scss";

export const LandingPage = (props) => {
  const scrollTo = () => {
    window.scrollTo(0, 769);
  };
  return (
    <div className="landing">
      <div className="landing__info">
        <h1>Logan Johnston</h1>
        <div className="landing__text">
          <h4 className="landing--fadein1">
            Developer
            {/* <img src={developer} /> */}
          </h4>
          <span className="landing__spacer">|</span>
          <h4 className="landing--fadein2">
            Gamer
            {/* <img src={gamer} /> */}
          </h4>
          <span className="landing__spacer">|</span>
          <h4 className="landing--fadein3">
            Philomath
            {/* <img src={team} /> */}
          </h4>
        </div>
      </div>
      {props.scrollPosition <= 15 ? (
        <div className="scroll-down-ind ">
          <span
            onClick={() => {
              scrollTo();
            }}
          >
            About me
            {/* <img src={scrollDown} alt="Scroll-Down" className="bounce" /> */}
            <ArrowDropDownIcon className="bounce"/>
            
          </span>
        </div>
      ) : null}
    </div>
  );
};
