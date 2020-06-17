import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import AdminLogin from "views/LoginPage/AdminLogin.js";
import Participants from "views/Participants/Participants.js";
import Researchers from "views/Researchers/Researchers.js";

import Advisors from "views/Advisors/Advisors.js";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/components" component={Components} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/admin-login" component={AdminLogin} />
      <Route path="/participants-page" component={Participants} />
      <Route path="/researchers-page" component={Researchers} />
      
      <Route path="/advisors-page" component={Advisors} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
