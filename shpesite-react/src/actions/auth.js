import { USER_LOGGGED_IN } from "../types";
import api from "../api";

export const userLoggedIn = (user) => ({
  type: USER_LOGGGED_IN,
  user
})

export const login = (credentials) => (dispatch) =>
  api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));
