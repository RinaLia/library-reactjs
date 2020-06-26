const initialState = {
  isError: false,
  msg: "",
  token: null,
};

const auth = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "LOGIN_PENDING": {
      return {
        ...state,
        isError: false,
      };
    }
    case "LOGIN_REJECTED": {
      return {
        ...state,
        isError: true,
        errorMsg: action.payload.response.data.message,
      };
    }
    case "LOGIN_FULFILLED":
      localStorage.setItem("data", JSON.stringify(action.payload.data.data));
      localStorage.setItem("token", action.payload.data.data.token);

      {
        return {
          ...state,
          isError: false,
          token: action.payload.data.data.token,
        };
      }
    case "LOGOUT_PENDING": {
      return {
        ...state,
        isError: true,
      };
    }
    case "LOGOUT_REJECTED": {
      return {
        ...state,
        isError: true,
        errorMsg: action.payload.response.data.message,
      };
    }
    case "LOGOUT":
      {
        localStorage.removeItem("data");
        localStorage.removeItem("token");
      }
      return {
        ...state,
        isError: false,
        token: null,
      };
    case "POST_REGIST_PENDING": {
      return {
        ...state,
        isError: false,
      };
    }
    case "POST_REGIST_REJECTED": {
      return {
        ...state,
        isError: true,
        errorMsg: action.payload.response.data.message,
      };
    }
    case "POST_REGIST_FULFILLED":

    default: {
      return {
        ...state,
        isLoading: false,
      };
    }
  }
};
export default auth;
