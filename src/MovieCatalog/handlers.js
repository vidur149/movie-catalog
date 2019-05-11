import { connect } from "react-redux";
import { compose, withState } from "recompose";
import { fetchMovies } from "./duck";

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: (search, page) => dispatch(fetchMovies(search, page))
  };
};

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const TaskHandlers = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState("searchValue", "setSearchValue", "")
);

export default TaskHandlers;
