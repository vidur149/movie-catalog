import React from "react";
import { Typography, Grid } from "@material-ui/core";
import MovieCard from "../MovieCard";
import Pagination from "../Pagination";

const MovieListPure = props => {
  const { movies, searchValue, fetchMovies } = props;
  return (
    <Grid container>
      <Grid item xs={12}>
        {searchValue && (
          <Typography variant="h4" gutterBottom>
            You searched for: {searchValue}
            {movies.total && <span>,{movies.total} Results found </span>}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        {movies.error && searchValue && (
          <Typography gutterBottom variant="h5">
            {movies.error}
          </Typography>
        )}
      </Grid>
      {searchValue && movies.Search.length && (
        // <Grid container item xs={12} spacing={16} justify="space-between">
        <Pagination
          loading={movies.loading}
          items={movies.Search.map(movie => (
            <MovieCard {...movie} />
          ))}
          total={movies.total}
          currentPageNo={movies.currentPageNo}
          getData={page => fetchMovies(searchValue, page)}
        />
        // </Grid>
      )}
    </Grid>
  );
};

export default MovieListPure;
