import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import MovieCard from './MovieCard';
import { Pagination } from '../../common/Pagination';

const MovieListPure = props => {
  const { movies, searchValue, fetchMovies } = props;
  console.log(movies);
  return (
    <Grid container>
      <Grid item xs={12}>
        {searchValue &&
          <Typography variant='h4' gutterBottom>
            You searched for: {searchValue}
            {movies.total &&
              <span>,{movies.total} Results found </span>
            }
          </Typography>}
      </Grid>
      <Grid item xs={12}>
        {movies.error && searchValue && <Typography gutterBottom variant='h5'>{movies.error}</Typography>}
      </Grid>
      {searchValue && movies.Search.length &&
        <Grid container item xs={12} spacing={16} justify='space-between'>
          <Pagination
            items={movies.Search.map((movie) => (
              <MovieCard {...movie} />
            ))}
            total={movies.total}
            currentPageNo={movies.currentPageNo}
            getData={page => fetchMovies(searchValue, page)}
          />
          {/* {movies.Search.length && movies.Search.map(movie => (
            <Grid item key={movie.imdbID} xs={12} sm={6} md={3}>
              <MovieCard {...movie} />
            </Grid>
          ))} */}
        </Grid>}
    </Grid >
  );
}

export default MovieListPure