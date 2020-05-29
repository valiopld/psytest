import React from "react";

import Quiz from "../../components/quiz/quiz.component";

import test from "../../db/test";

const QuizesPage = () => {
  return (
    <div className="quizes-page">
      <Quiz test={test} />
    </div>
  );
};

export default QuizesPage;
