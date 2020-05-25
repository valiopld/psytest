import React, { useState } from "react";

import "./currentQuiz.style.css";

import { quiz } from "./quiz";

const CurrentQuiz = () => {
  const [getSlide, setSlide] = useState(null);
  const [getPoints, setPoints] = useState(0);

  const nextSlide = (e) => {
    setPoints(getPoints + parseInt(e.target.attributes.points.value));

    if (getSlide.id !== quiz.slides.length) {
      setSlide(quiz.slides[getSlide.id]);
    } else {
      console.log("GINISH");
    }
  };
  return (
    <div className="current-quiz">
      <div className="slides-points"></div>
      {getSlide === null ? (
        <div className="previue">
          {quiz.preview}
          <button onClick={() => setSlide(quiz.slides[0])}>START</button>
        </div>
      ) : (
        <div className="slide">
          <div className="question">{getSlide.question}</div>
          <div className="answers">
            {getSlide.answers.map((ans) => (
              <p
                className="answer"
                points={ans.point}
                onClick={nextSlide}
                key={ans.ans}
              >
                {ans.ans}
              </p>
            ))}
          </div>
          {getPoints}
        </div>
      )}
    </div>
  );
};

export default CurrentQuiz;
