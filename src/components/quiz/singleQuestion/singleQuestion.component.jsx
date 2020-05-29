import React from "react";

const SingleQuestion = ({ question, answers, ansFunc }) => {
  return (
    <div className="single-question">
      <h1>{question}</h1>
      {answers.map((a, i) => (
        <p key={i} onClick={() => ansFunc(i)} className="option">
          {a}
        </p>
      ))}
    </div>
  );
};

export default SingleQuestion;
