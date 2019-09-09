import axios from "axios";
import { GET_USERS } from "./types";

export const getUsers = () => async dispatch => {
  const response = await axios.get("http://jsonplaceholder.typicode.com/users");
  console.log(response.data, "actions");
  dispatch({
    type: GET_USERS,
    payload: response.data
  });
};
