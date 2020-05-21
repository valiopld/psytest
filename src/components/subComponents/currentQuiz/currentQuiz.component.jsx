import React, { useState } from "react";

import "./currentQuiz.style.css";

import { quiz } from "./quiz";

const CurrentQuiz = () => {
  const [getSlide, setSlide] = useState(null);

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
          <div className="quistion">{getSlide.question}</div>
          <div className="answers">
            {getSlide.answers.map((ans) => (
              <p key={ans.ans}>{ans.ans}</p>
            ))}
          </div>
          {getSlide.id !== quiz.slides.length ? (
            <button onClick={() => setSlide(quiz.slides[getSlide.id])}>
              next
            </button>
          ) : (
            <button>FINISH</button>
          )}
        </div>
      )}
    </div>
  );
};

export default CurrentQuiz;
