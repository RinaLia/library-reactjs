import http from "../../helper/http";
import qs from "querystring";
const { REACT_APP_URL } = process.env;
const url = `${REACT_APP_URL}books/auth/login`;

export const login = (email, password) => {
  const data = { email, password };
  return {
    type: "LOGIN",
    payload: http().post(url, qs.stringify(data)),
  };
};

export const logout = () => {
  alert("LOGOUT");
  return {
    type: "LOGOUT",
  };
};
