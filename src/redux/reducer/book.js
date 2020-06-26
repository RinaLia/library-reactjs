const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: "",
  dataBook: [],
  pageInfo: [],
};

const bookReducers = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "GETBOOK_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "GETBOOK_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      };
    }
    case "GETBOOK_FULFILLED": {
      console.log("store =>", action.payload.data);
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataBook: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case "POSTBOOK_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "POSTBOOK_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case "POSTBOOK_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case "PATCHBOOK_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "PATCHBOOK_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case "DELETEBOOK_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case "DELETEBOOK_FULFILLED": {
    }
    default: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
  }
};

export default bookReducers;
