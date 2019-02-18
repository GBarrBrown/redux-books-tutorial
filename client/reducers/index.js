import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";

export default combineReducers({
  books: BooksReducer
});
