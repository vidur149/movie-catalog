import {
  FETCH_MOVIE_FAILURE,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_REQUEST,
} from './types';

const INITIAL_STATE = {
  loading: false,
  error: undefined,
  Search: [],
  total: undefined,
  currentPageNo: 1
};

export const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: undefined
      };
    }
    case FETCH_MOVIE_SUCCESS: {
      return {
        loading: false,
        error: undefined,
        Search: action.payload.Search,
        currentPageNo: action.payload.page,
        total: action.payload.totalResults
      };
    }
    case FETCH_MOVIE_FAILURE: {
      return {
        ...state,
        total: undefined,
        Search: [],
        loading: false,
        page: 1,
        error: action.payload
      };
    }
    default:
      return state;
  }
};