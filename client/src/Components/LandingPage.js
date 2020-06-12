import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "../styling/LandingPage.scss";

export const LandingPage = (props) => {
  const scrollTo = () => {
    window.scrollTo(0, 769);
  };
  return (
    <section className="landing">
      <div className="landing__info">
        <h1>Logan Johnston</h1>
        <div className="landing__text">
          <h4 className="landing--fadein1">Full Stack Developer</h4>
          <span className="landing__spacer">|</span>
          <h4 className="landing--fadein2">San Diego, California</h4>
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
            <ArrowDropDownIcon className="bounce" />
          </span>
        </div>
      ) : null}
    </section>
  );
};
