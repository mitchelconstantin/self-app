import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import giantRobot from '../Assets/GiantRobotLTD_Logo.svg';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#585858',
    paddingTop: '32px',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '32px',
      paddingLeft: '8px',
      width: '100vw'
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: '80px',
      paddingLeft: '168px',
      height: '100vh'
    }
  },
  info: {
    [theme.breakpoints.down('sm')]: {
      width: '100vw'
    },
    [theme.breakpoints.up('md')]: {
      width: '535px'
    }
  },
  logo: {
    height: '26px',
    width: '177px'
  },
  title: {
    color: '#FFFFFF',
    paddingTop: '32px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '32px'
    }
  },
  subTitle: {
    color: '#EAEAEA ',
    fontSize: '14px '
  }
}));

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
