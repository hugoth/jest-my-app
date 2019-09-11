import { GET_USER_POSTS } from "./types";
import jsonPlaceholder from "../../apis/jsonPlaceholder";

export const getUserPosts = id => async dispatch => {
  console.log(id);

  const response = await jsonPlaceholder.get(`posts/`, {
    params: {
      userId: id
    }
  });
  dispatch({
    type: GET_USER_POSTS,
    payload: response.data
  });
};
