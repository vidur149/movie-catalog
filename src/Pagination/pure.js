import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import LoadingScreen from "../LoadingScreen/pure";

class PaginationComponent extends React.Component {
  renderPageNumbers() {
    const { currentPageNo, total, getData } = this.props;
    const noOfPages = total / 10;
    let pageNumbers = [];
    for (let i = 5; i > 0; i--) {
      if (currentPageNo - i > 0) {
        pageNumbers.push(
          <Grid item key={currentPageNo - i}>
            <Fab onClick={e => getData(currentPageNo - i)} color="secondary">
              {currentPageNo - i}
            </Fab>
          </Grid>
        );
      }
    }

    for (let i = 0; i < 5; i++) {
      if (currentPageNo + i < noOfPages) {
        pageNumbers.push(
          <Grid item key={currentPageNo + i}>
            <Fab
              onClick={e => getData(currentPageNo + i)}
              color={i === 0 ? "primary" : "secondary"}
            >
              {currentPageNo + i}
            </Fab>
          </Grid>
        );
      }
    }
    return pageNumbers;
  }

  render() {
    const { items, currentPageNo, getData, total, loading } = this.props;
    const noOfPages = total / 10;
    if (loading) {
      return <LoadingScreen />;
    }
    return (
      <Grid style={{ margin: "4px" }} container spacing={8}>
        <Grid style={{ margin: "8px" }} container item spacing={16}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              {item}
            </Grid>
          ))}
        </Grid>
        <Grid
          spacing={8}
          container
          item
          alignItems={"center"}
          justify={"center"}
        >
          <Grid item>
            <Button
              disabled={currentPageNo === 1}
              onClick={e => getData(currentPageNo - 1)}
            >
              Prev
            </Button>
          </Grid>
          {this.renderPageNumbers()}
          <Grid item>
            <Button
              disabled={currentPageNo >= noOfPages}
              onClick={e => getData(currentPageNo + 1)}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default PaginationComponent;
