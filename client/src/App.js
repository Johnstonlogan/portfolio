import React, { useEffect, useState } from "react";
import "./App.scss";
import { LandingPage } from "./Components/LandingPage";
import { AboutMe } from "./Components/AboutMe";
import {LeftNav} from "./Components/LeftNav"
import {Technologies} from "./Components/Technologies"

function App() {
    const [scrollPos, setScrollPos] = useState(0);
    window.addEventListener('scroll', (e) =>{
      setScrollPos(window.scrollY)
     

    })

 
  return (
    <div className="App">
     <LeftNav />
      {/* <HamburgerButton /> */}
      <div className="app-container">
        <LandingPage scrollPosition={scrollPos} />
        <AboutMe />
        <Technologies />
      </div>
    </div>
  );
}

export default App;
