import jsonPlaceholder from "../../apis/jsonPlaceholder";
import { GET_USERS } from "./types";

export const getUsers = () => async dispatch => {
  const response = await jsonPlaceholder.get("/users");
  dispatch({
    type: GET_USERS,
    payload: response.data
  });
};
