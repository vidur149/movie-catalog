import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';

class PaginationComponent extends React.Component {

  renderPageNumbers() {
    const { currentPageNo, total, getData } = this.props;
    const noOfPages = total / 10;
    let pageNumbers = [];
    for (let i = 5; i > 0; i--) {
      if (currentPageNo - i > 0) {
        pageNumbers.push(
          <Fab
            key={currentPageNo - i}
            onClick={e => getData(currentPageNo - i)}
            color="secondary">{currentPageNo - i}</Fab>
        );
      }
    }

    for (let i = 0; i < 5; i++) {
      if (currentPageNo + i < noOfPages) {
        pageNumbers.push(
          <Fab
            key={currentPageNo + i}
            onClick={e => getData(currentPageNo + i)}
            color={i === 0 ? 'primary' : "secondary"}>{currentPageNo + i}</Fab>
        );
      }
    }
    return pageNumbers;
  }

  render() {
    const { items, currentPageNo, getData, total } = this.props;
    const noOfPages = total / 10;
    return (
      <Grid container spacing={8}>
        <Grid container item spacing={16}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              {item}
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          item
          alignItems={'center'}
          justify={'center'}
          spacing={16}
        >
          <Grid item>
            <Button
              disabled={currentPageNo === 1}
              onClick={e => getData(currentPageNo - 1)}
            >
              Prev
              </Button>
          </Grid>
          <Grid item>
            {this.renderPageNumbers()}
            {/* <Fab color="secondary">{currentPageNo}</Fab> */}
          </Grid>
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
