import API from "../services/api";

export const fetchUser = () => ({
  type: "FETCH_USER",
});

export const fetchUserSuccess = (payload) => ({
  type: "FETCH_USER_SUCESS",
  payload,
});

export const fetchUserFailure = (payload) => ({
  type: "FETCH_USER_FAILURE",
  payload,
});

function fetchingUser() {
  return async (dispatch) => {
    dispatch(fetchUser());
    await API.get("users")
      .then((res) => dispatch(fetchUserSuccess(res.data?.data)))
      .catch((err) => dispatch(fetchUserFailure(err)));
  };
}

export { fetchingUser };
