import React from "react";

import "./testCard.style.css";

const TestCard = ({ id, onClick }) => (
  <div onClick={onClick} className="test-card">
    This is Test Number {id}
  </div>
);

export default TestCard;
