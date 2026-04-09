import React, { useState } from "react";
import "./Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

const Cards = () => {

  const [answers, setAnswers] = useState(false);

  function toggleAnswer() {
    setAnswers((answers) => !answers )
  }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card__wrapper">
            <div className="bck__drp">
              <h1 className="card__title">Question: 1</h1>
              <h3 className="card__question">
                What is the difference between let and var?
              </h3>
              <div className={`answers ${answers ? 'answers__visible' : ""}`}>
                <h4>
                  <b>Scope:</b>
                </h4>
                <ul className="list">
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
                <ul className="list">
                  <li>"var" gets hoisted</li>
                  <li>"let" does not get hoisted</li>
                </ul>
              </div>
              
            </div>

            <div className="clickable__links">
              <button className="card__nav">
                <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                Previous
              </button>
              <button className="card__nav" onClick={toggleAnswer}>
                {toggleAnswer ? answers : ""}
                Solution
                <FontAwesomeIcon icon={faRotate} spin />
              </button>
              <button className="card__nav">
                Next
                <FontAwesomeIcon icon="fa-solid fa-angle-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
