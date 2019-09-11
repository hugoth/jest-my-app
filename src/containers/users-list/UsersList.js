import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as usersAction from "../../store/actions/usersAction";
import { Link } from "react-router-dom";

export function UsersList({ getUsers, users }) {
  // add named export for testing purpose
  useEffect(() => {
    getUsers();
  }, []);
  console.log(users, "props userlists");
  const renderList = users => {
    return (
      <ul>
        {users.map(user => (
          <Link to={`user/${user.name}/${user.id}`} key={user.id}>
            {/* add key on link too because it's allow react to rerender more efficiancy */}
            <li>{user.name}</li>
          </Link>
        ))}
      </ul>
    );
  };

  return renderList(users);
}

const mapStateToProps = state => {
  return { users: state.users };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(usersAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
