import React from 'react';
import Search from '../Search';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

const HeaderPure = props => {
  const { classes, fetchMovies, searchValue, setSearchValue } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Movie Catalog
          </Typography>
          <Search
            searchValue={searchValue} setSearchValue={setSearchValue}
            classes={classes} fetchMovies={fetchMovies} />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              color="inherit"
            >
              Vidur Singla<AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderPure;