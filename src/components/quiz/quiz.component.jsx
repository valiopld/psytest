import React, { useState } from "react";

import "./quiz.style.scss";

import test from "../../db/test";

const Quiz = () => {
  const [getQuizState, setQuizState] = useState("start");
  const [getQn, setQn] = useState(0);
  const [getPoint, setPoint] = useState(0);

  const nextQ = (i) => {
    setPoint(getPoint + (i + 1));
    setQn(getQn + 1);
    if (getQn === test.questions.length - 1) {
      setQuizState("end");
    }
  };

  const show = () => {
    switch (getQuizState) {
      case "start":
        return (
          <div>
            <h1>{test.pre}</h1>
            <button onClick={() => setQuizState("quiz")}>START</button>
          </div>
        );
      case "quiz":
        return (
          <div>
            <h1>{test.questions[getQn]}</h1>
            {test.answers.map((a, i) => (
              <p key={i} onClick={() => nextQ(i)} className="option">
                {a}
              </p>
            ))}
          </div>
        );
      case "end":
        return <div>END {getPoint}</div>;

      default:
        break;
    }
  };
  return (
    <div className="quiz">
      <div className="progress-bar"></div>
      <div className="content">{show()}</div>
    </div>
  );
};

export default Quiz;
