import React from "react";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const HeaderPure = props => {
  const { searchValue, handleSearchChange, classes } = props;
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        value={searchValue}
        onChange={event => handleSearchChange(event)}
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
      />
    </div>
  );
};

export default HeaderPure;
