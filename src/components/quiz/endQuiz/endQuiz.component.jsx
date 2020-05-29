import React from "react";

const EndQuiz = ({ points }) => {
  return (
    <div className="end-quiz">
      <p>The quiz is finished</p>
      <p>Your points are: {points}</p>
    </div>
  );
};

export default EndQuiz;
