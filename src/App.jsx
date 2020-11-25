import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Import Views
import Home from "./views/Home";
import Author from "./views/Author";

const App = () => {
  return (
    <Router>
      {/* This part is only for testing for now */}
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/author/John">Author</Link>
          </li>
        </ul>
      </div>

      <hr />

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
