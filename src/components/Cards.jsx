import React from "react";
import "./Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cards = () => {
  return (
    <div>
      <html>
        <div className="container">
          <div className="row">
            <div className="card__wrapper">
              <h1 className="card__title">Question: 1</h1>
              <h3 className="card__question">
                What is the difference between let and var?
              </h3>
              <div className="answers">
                <h4>
                  <b>Scope:</b>
                </h4>
                <ul>
                  <li>
                    <p>"let" has a block scope</p>
                  </li>
                  <li>
                    <p>"var" has a function scope</p>
                  </li>
                </ul>
                <h4>
                  <b>Hoisting:</b>
                </h4>
                <ul>
                  <li>"var" gets hoisted</li>
                  <li>"let" does not get hoisted</li>
                </ul>
              </div>
              <div className="clickable__links">
                <FontAwesomeIcon icon="fa-solid fa-rotate" spin />
              </div>
            </div>
          </div>
        </div>
      </html>
    </div>
  );
};

export default Cards;
