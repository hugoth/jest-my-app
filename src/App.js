import React from "react";
import { hot } from "react-hot-loader";
import { Router, Route } from "react-router-dom";
import history from "./history";
import UsersList from "./containers/users-list/UsersList";
import UserPage from "./containers/user-page/UserPage";
import Container from "@material-ui/core/Container";

const App = () => {
  return (
    <Container maxWidth="sm">
      <>
        <Router history={history}>
          <Route path="/" exact component={UsersList} />
          <Route
            path="/user/:name/:id"
            render={props => {
              return <UserPage match={props.match} />;
            }}
          />
        </Router>
      </>
    </Container>
  );
};

export default hot(module)(App);
