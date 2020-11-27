import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Import Views
import Home from "./views/Home";
import Author from "./views/Author";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/author/:name">
          <Author />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
