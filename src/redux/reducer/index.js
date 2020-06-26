import { combineReducers } from "redux";
import auth from "./auth";
import bookReducers from "./book";
import genre from "./genre";
import author from "./author";
// import user from "./user";
import transactionReducer from "./transaction";
import userReducers from "./user";

const reducers = combineReducers({
  auth: auth,
  book: bookReducers,
  genre: genre,
  user: userReducers,
  author: author,
  transaction: transactionReducer,
});

export default reducers;
