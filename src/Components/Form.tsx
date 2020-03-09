import React from 'react';
import { Box, Button, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  form: {
    width: '376px',
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    color: 'white'
  }
}));

export const Form = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField label="FIRST NAME" variant="outlined" />
        <TextField label="LAST NAME" variant="outlined" />
        <TextField label="ADDRESS" variant="outlined" />
        <TextField label="ADRESS 2 (OPTIONAL)" variant="outlined" />
      </form>
      <Button className={classes.button}>Submit</Button>
    </Box>
  );
};
