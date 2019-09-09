import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../../store/actions/usersAction";

class UsersList extends React.Component {
  componentDidMount() {
    console.log(this.props.users, "before");
    this.props.getUsers();
    console.log(this.props.users, "after");
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
  return { users: state.users };
};

export default connect(
  mapStateToProps,
  { getUsers }
)(UsersList);
