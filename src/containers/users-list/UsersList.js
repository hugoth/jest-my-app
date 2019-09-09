import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as usersAction from "../../store/actions/usersAction";
class UsersList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return <div>{this.renderUsers()}</div>;
  }
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
