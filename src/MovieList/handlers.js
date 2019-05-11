import { connect } from "react-redux";
import { compose } from "recompose";

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const MovieListHandlers = compose(
  connect(
    mapStateToProps,
    null
  )
);

export default MovieListHandlers;
