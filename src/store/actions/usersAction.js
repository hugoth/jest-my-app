import jsonPlaceholder from "../../apis/jsonPlaceholder";
import { GET_USERS } from "./types";

export const getUsers = () => async dispatch => {
  const response = await jsonPlaceholder.get("/users");
  console.log(response.data, "actions");
  dispatch({
    type: GET_USERS,
    payload: response.data
  });
};
