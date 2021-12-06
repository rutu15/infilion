import { combineReducers } from "redux";
import fetchUser from "./fetch-user";
import deleteUser from "./delete-user";
import createUser from "./create-user";

const appReducer = combineReducers({
  fetchUser,
  deleteUser,
  createUser,
});

export default appReducer;
