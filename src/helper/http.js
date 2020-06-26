import axios from "axios";
// const { REACT_APP_URL } = process.env
// const URL = process.env.REACT_APP_URL

// export const loginUser = (body) => {
//   return axios.post{`S{URL}books/auth/login`,body, {header:(`content-type`:'application/x-www-form-urlencoded')}  }
// }

export default (token = null) => {
  if (token) {
    return axios.create({
      headers: {
        Authorization: "Bearer ".concat(token),
      },
    });
  } else {
    return axios;
  }
};
