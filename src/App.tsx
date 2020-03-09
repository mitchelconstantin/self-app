import React from 'react';
import { Box } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Header } from './Components/Header';
import { Form } from './Components/Form';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row'
      }
    }
  })
);

export const App = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} >
      <Header />
      <Form />
    </Box>
  );
};
