import React from "react";
import "../styling/Skills.scss";
import ScrollAnimation from "react-animate-on-scroll";
export const Skills = (props) => {
  return (
    <section className="skills">
      <div>
        <header className="skills__header">Skills</header>
        <hr />
      </div>
      <div className="skills__container">
        {props.cardInfo.map((card, i) => {
          return (
            <div className="card" key={i}>
              <img className="card__image" src={card.image} alt={card.title} />
              <ScrollAnimation animateIn="slide-in-top">
                <h2 className="card__title">{card.title}</h2>
              </ScrollAnimation>
              <ScrollAnimation animateIn="slide-in-bottom">
                <ul className="card__content">
                  {card.content.map((skill, i) => {
                    return <li key={i}>{skill}</li>;
                  })}
                </ul>
              </ScrollAnimation>
            </div>
          );
        })}
      </div>
    </section>
  );
};
