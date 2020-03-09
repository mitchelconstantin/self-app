import React from 'react';
import { Box, Button, TextField, makeStyles } from '@material-ui/core';
import whiteArrow from '../Assets/White_Arrow.svg';

const useStyles = makeStyles(theme => ({
  container: {
    width: '376px',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '60px',
    paddingLeft: '24px',
    paddingRight: '24px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '48px'
  },
  textField: {
    marginTop: '12px',
    marginBottom: '12px'
  },
  button: {
    backgroundColor: '#FFAB44',
    color: '#FFFFFF',
    fontSize: '16px',
    borderRadius: '6px',
    height: '48px',
    paddingLeft: '24p',
    paddingRight: '24px',
    width: '100px'
  }
}));

export const Form = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          className={classes.textField}
          label="FIRST NAME"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          label="LAST NAME"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          label="ADDRESS"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          label="ADRESS 2 (OPTIONAL)"
          variant="outlined"
        />
      </form>
      <Button className={classes.button}>
        next <img src={whiteArrow} alt={'Logo'} />
      </Button>
    </Box>
  );
};
