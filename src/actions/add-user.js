import API from "../services/api";
import { fetchingUser } from "./fetch-user";

export const createUser = (payload) => ({
  type: "CREATE_USER",
  payload,
});

function creatingUser(payload) {
  return async (dispatch) => {
    dispatch(createUser(payload));
    await API.post("users");
  };
}

export { creatingUser };
