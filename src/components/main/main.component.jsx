import React from "react";
import { Switch, Route } from "react-router-dom";

import "./main.style.scss";

import HomePage from "../../pages/homePage/homePage.page";
import QuizesPage from "../../pages/quizesPage/quizesPage.page";
import ErrorPage from "../../pages/errorPage/errorPage.page";

const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/quizes" component={QuizesPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default Main;
