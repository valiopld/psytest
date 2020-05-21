import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "../../pages/home-page/homePage.component";
import TestsPage from "../../pages/allTests-page/allTestPage.component";
import AboutPage from "../../pages/about-page/aboutPage.component";
import TestPage from "../../pages/test-page/testPage.component";

import "./main.style.css";

const Main = () => (
  <div className="main">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/tests" component={TestsPage} />
      <Route path="/about" component={AboutPage} />
      <Route exact path="/test">
        <Redirect to="/tests" />
      </Route>
      <Route path="/test/:id" component={TestPage} />
    </Switch>
  </div>
);

export default Main;
