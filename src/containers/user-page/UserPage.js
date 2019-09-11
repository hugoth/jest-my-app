import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUserPosts } from "../../store/actions/postsAction";

export function UserPage(props) {
  useEffect(() => {
    props.getPosts(props.match.params.id);
  }, []);
  return (
    <div>
      <h2>Les posts de {props.match.params.name}</h2>
      {props.posts &&
        props.posts.map(post => {
          return (
            <div key={post.id}>
              <p id="title">{post.title}</p>
              <p id="body">{post.body}</p>
            </div>
          );
        })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPosts: getUserPosts
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
