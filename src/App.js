import React from "react";
import { hot } from "react-hot-loader";
import { Router, Route } from "react-router-dom";
import history from "./history";
import UsersList from "./containers/users-list/UsersList";

const App = () => {
  return (
    <>
      <Router history={history}>
        <Route path="/" exact component={UsersList} />
      </Router>
    </>
  );
};

export default hot(module)(App);
