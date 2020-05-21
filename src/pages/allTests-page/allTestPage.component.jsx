import React from "react";
import TestCard from "../../components/subComponents/testCard/testCard.component";

import "./allTestsPage.style.css";

const TestPage = (props) => {
  console.log(props);

  return (
    <div className="all-tests-page">
      <TestCard onClick={() => props.history.push("/test/test1")} id="1" />
      <TestCard id="2" />
      <TestCard id="3" />
      <TestCard id="5" />
      <TestCard id="6" />
      <TestCard id="7" />
      <TestCard id="9" />
      <TestCard id="10" />
      <TestCard id="11" />
      <TestCard id="12" />
      <TestCard id="13" />
      <TestCard id="14" />
    </div>
  );
};

export default TestPage;
