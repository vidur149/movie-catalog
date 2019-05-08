import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { NormalLoader } from './styles';

const LoadingScreen = () => {
  return (
    <NormalLoader>
      <CircularProgress size={50} />
      <Typography align="center">Loading</Typography>
    </NormalLoader>
  );
};

export default LoadingScreen;
