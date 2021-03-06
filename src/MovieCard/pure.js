import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Chip } from "@material-ui/core";
import Placeholder from "./placeholder.png";
import { styles } from "./styles";

const MovieCard = props => {
  const { classes, Title, Year, Type, Poster, imdbID } = props;
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Poster !== "N/A" ? Poster : Placeholder}
          style={{ backgroundColor: "black" }}
          title={Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Title}
          </Typography>
        </CardContent>
        <CardActions>
          <Chip label={Year} className={classes.chip} />
          <Chip label={Type} className={classes.chip} />
          <Chip label={imdbID} className={classes.chip} />
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(MovieCard);
