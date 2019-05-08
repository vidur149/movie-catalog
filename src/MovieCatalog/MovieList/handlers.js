import { connect } from "react-redux";
import { compose, branch, renderComponent } from "recompose";
import { LoadingScreen } from "../../common/LoadingScreen";

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const MovieListHandlers = compose(
  connect(
    mapStateToProps,
    null
  ),
  branch(
    ({ movies: { loading } }) => loading,
    renderComponent(LoadingScreen)
  )
);

export default MovieListHandlers;
