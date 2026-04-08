import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card__wrapper">
            <h1 className="card__title">Question: 1</h1>
            <h3 className="card__question">
              What is the difference between let and var?
            </h3>
            <div className="answers">
              <p><b>Scope:</b></p>
              <p>"let" has a block scope</p>
              <p>"var" has a function scope</p>
            </div>
            <div className="clickable__links"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
