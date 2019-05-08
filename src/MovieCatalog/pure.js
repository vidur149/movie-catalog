import React from "react";
import Header from "./Header";
import MovieList from "./MovieList";

const MovieCatalogPure = props => {
  const { fetchMovies, searchValue, setSearchValue } = props;

  return (
    <main>
      <Header fetchMovies={fetchMovies} searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList searchValue={searchValue} fetchMovies={fetchMovies} />
    </main>
  );
};

export default MovieCatalogPure;
