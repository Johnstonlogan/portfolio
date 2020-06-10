import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../styling/About.scss";

export const InfoSection = (props) => {
  return (
    <section className="infoSection">
      <div className="infoSection__header">
        <header className="infoSection__header__text">{props.title}</header>
        <hr />
      </div>
      {props.section.map((info, i) => {
        return (
          <div className="infoSection__container " key={i}>
            <div className="infoSection__left">
              <ScrollAnimation
                className="infoSection__image"
                animateIn="slide-in-left"
              >
                <img src={info.image} alt="infoSection" />
              </ScrollAnimation>
            </div>

            <div className="infoSection__right">
              <ScrollAnimation animateIn="slide-in-right">
                <p className="infoSection__text">{info.text}</p>
              </ScrollAnimation>
            </div>
          </div>
        );
      })}
    </section>
  );
};
