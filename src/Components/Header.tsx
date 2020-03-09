import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import giantRobot from '../Assets/GiantRobotLTD_Logo.svg';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#585858',
    paddingTop: '32px',
    paddingRight: '80px',
    paddingLeft: '168px',
    height: '100vh'
  },
  info: {
    width: '535px'
  },
  logo: {
    height: '26px',
    width: '177px'
  },
  title: {
    color: '#FFFFFF',
    fontSize: '32px'
  },
  subTitle: {
    color: '#EAEAEA ',
    fontSize: '14px '
  }
});

export const Header = () => {
  const classes = useStyles();
  const title = 'Welcome';
  const subTitle = 'Please tell us a bit about yourself to get started.';
  return (
    <Box className={classes.container}>
      <Box className={classes.info}>
        <img className={classes.logo} src={giantRobot} alt={'Logo'} />
        <Typography className={classes.title}> {title}</Typography>
        <Typography className={classes.subTitle}> {subTitle}</Typography>
      </Box>
    </Box>
  );
};
