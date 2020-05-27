import React from "react";

import "../styling/LandingPage.scss";

export const LandingPage = () => {
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
    </div>
  );
};
