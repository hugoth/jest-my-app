import { GET_USER_POSTS } from "../actions/types";
const INITIAL_STATE = [];

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_POSTS: {
      return [...state, ...action.payload];
    }
    default:
      return state;
  }
};

export default usersReducer;
