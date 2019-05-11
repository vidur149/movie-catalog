import { combineReducers } from "redux";
import { moviesReducer } from "./MovieCatalog/duck";

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
