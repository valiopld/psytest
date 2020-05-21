import React from "react";

import CurrentQuiz from "../../components/subComponents/currentQuiz/currentQuiz.component";
import "./testPage.style.css";

const TestPage = ({ match }) => {
  const id = match.params.id;
  if (!id) {
    console.log("nema");
  } else {
    console.log(id);
  }

  return (
    <div className="test-page">
      <p className="quiz-title">This is Test Page - {id}</p>
      <CurrentQuiz />
    </div>
  );
};

export default TestPage;
