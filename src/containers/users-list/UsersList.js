import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as usersAction from "../../store/actions/usersAction";

const UsersList = ({ getUsers, users }) => {
  useEffect(() => {
    getUsers();
  }, []);

  return users.map(user => {
    return <li key={user.id}>{user.name}</li>;
  });
};

const mapStateToProps = state => {
  console.log(state.users, "mapStateToProps");
  return { users: state.users };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(usersAction, dispatch);
// pourquoi tout importer ? Je pense que c'est mieux de déclarer l'action spécifique getUsers car c'est la seule qui va être utilisée ici

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
