import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import "../styling/TopNav.scss";

export const TopNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="top-nav">
      <div className="top-nav__menu">
        {open === true ? (
          <ul className=" top-nav__menu-item slide-in">
               <a
                target="_blank"
                href="https://docs.google.com/document/d/1EI_3h0uLJdE_tY5LrUYO0tFNRnunKv1xQ5WGCt2meRg/edit"
                rel="noopener noreferrer"
              >
            <li>
             
                Resume
              
            </li>
            </a>
            <a
                target="_blank"
                href="https://github.com/Johnstonlogan"
                rel="noopener noreferrer"
              >
            <li>
              
                Github
             
            </li>
            </a>
            <a
                target="_blank"
                href="https://www.linkedin.com/in/logan-johnston-58b08a152/"
                rel="noopener noreferrer"
              >
            <li>
             
                Linkedin
             
            </li>
            </a>
          </ul>
        ) : (
          <ul className=" top-nav__menu-item slide-out ">
            <li>Resume</li>
            <li>Github</li>
            <li>Linkedin</li>
          </ul>
        )}

        {open === false ? (
          <a
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuIcon />
          </a>
        ) : (
          <a
            onClick={() => {
              setOpen(false);
            }}
          >
            <MenuOpenIcon />
          </a>
        )}
      </div>
    </nav>
  );
};
