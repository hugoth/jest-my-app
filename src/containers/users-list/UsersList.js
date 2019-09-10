import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as usersAction from "../../store/actions/usersAction";

export function UsersList({ getUsers, users }) {
  // add named export for testing purpose
  useEffect(() => {
    getUsers();
  }, []);

  const renderList = users => {
    return users.map(user => <li key={user.id}>{user.name}</li>);
  };

  return <ul>{renderList(users)}</ul>;
}

const mapStateToProps = state => {
  console.log(state.users, "mapStateToProps");
  return { users: state.users };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(usersAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
