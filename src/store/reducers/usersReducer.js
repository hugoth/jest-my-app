import { GET_USERS } from "../actions/types";
const INITIAL_STATE = [];
const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS: {
      return [...state, ...action.payload]; // pourquoi le spread operator devant l'action.payload ?
    }
    default:
      return state;
  }
};

export default usersReducer;
