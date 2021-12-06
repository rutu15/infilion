import API from "../services/api";
import { fetchingUser } from "./fetch-user";

export const deleteUser = (payload) => ({
  type: "DELETE_USER",
  payload,
});

function deletingUser(payload) {
  return async (dispatch) => {
    dispatch(deleteUser(payload));
    await API.delete(`users/${payload}`).then((res) =>
      dispatch(fetchingUser())
    );
  };
}

export { deletingUser };
