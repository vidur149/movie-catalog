import { compose, withHandlers } from "recompose";

const SearchHandlers = compose(
  withHandlers({
    handleSearchChange: props => event => {
      const { setSearchValue, fetchMovies } = props;
      setSearchValue(event.target.value);
      fetchMovies(event.target.value, 1);
    }
  })
);

export default SearchHandlers;
