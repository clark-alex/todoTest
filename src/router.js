
import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from './Components/Main';
import Details from './Components/Details/Details';

export default (
  <Switch>
    <Route component={ Main } path="/" exact />
    <Route component={ Details } path="/details" />
  </Switch>
)