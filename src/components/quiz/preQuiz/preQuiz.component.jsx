import React from "react";

const PreQuiz = ({ text, func }) => {
  return (
    <div className="pre-quiz">
      <p>{text}</p>
      <button onClick={func}>START</button>
    </div>
  );
};

export default PreQuiz;
