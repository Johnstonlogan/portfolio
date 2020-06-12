import React from "react";
import "../styling/Skills.scss";
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
              <h2 className="card__title">{card.title}</h2>
              <ul className="card__content">
                {card.content.map((skill, i) => {
                  return <li key={i}>{skill}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
