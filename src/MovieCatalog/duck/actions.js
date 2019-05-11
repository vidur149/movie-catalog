import {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE
} from "./types";
import axios from "axios";

export const fetchMovies = (search, page) => {
  return dispatch => {
    dispatch({
      type: FETCH_MOVIE_REQUEST
    });
    const baseUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8";
    axios
      .get(
        `${baseUrl}${search ? `&s=${search}` : ""}${
          page ? `&page=${page}` : ""
        }`
      )
      .then(res => {
        if (res.data.Response !== "False" && search) {
          return dispatch({
            type: FETCH_MOVIE_SUCCESS,
            payload: Object.assign({}, res.data, { page: page })
          });
        } else {
          throw res.data.Error;
        }
      })
      .catch(err => {
        dispatch({
          type: FETCH_MOVIE_FAILURE,
          payload: err
        });
      });
  };
};
