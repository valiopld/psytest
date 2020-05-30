import React, { useState } from "react";

import "./quiz.style.scss";

import PreQuiz from "./preQuiz/preQuiz.component";
import EndQuiz from "./endQuiz/endQuiz.component";
import SingleQuestion from "./singleQuestion/singleQuestion.component";

import test from "../../db/empatia";

import { createTest } from "../../db/createTest";

const myTest = createTest(test);

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
        return <PreQuiz text={myTest.pre} func={() => setQuizState("quiz")} />;
      case "quiz":
        return (
          <SingleQuestion
            question={test.questions[getQn]}
            answers={test.answers}
            ansFunc={(i) => nextQ(i)}
          />
        );
      case "end":
        return <EndQuiz points={getPoint} />;

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
