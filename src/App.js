// src/App.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import Environments from "./components/Environments";
import Environment from "./components/Environment";
import Service from "./components/Service";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Environments} />
      <Route exact path="/:environment" component={Environment} />
      <Route exact path="/:environment/:service" component={Service} />
    </Switch>
  );
}
