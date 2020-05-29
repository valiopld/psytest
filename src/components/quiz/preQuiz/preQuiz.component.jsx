import React from "react";

const PreQuiz = ({ text, func }) => {
  return (
    <div className="pre-quiz">
      <h1>{text}</h1>
      <button onClick={func}>START</button>
    </div>
  );
};

export default PreQuiz;
