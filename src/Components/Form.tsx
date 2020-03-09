import React, { useState } from 'react';
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

const emptyState = {
  firstName: '',
  lastName: '',
  address: '',
  addressTwo: ''
};
export const Form = () => {
  const classes = useStyles();
  const [formState, setFormState] = useState(emptyState);

  const handleChange = (type: string, newValue: any) => {
    setFormState(prev => ({ ...prev, [type]: newValue }));
  };
  const isValidForm = (): boolean =>
    Boolean(formState.firstName && formState.lastName && formState.address);

  const handleClick = () => {
    const { firstName, lastName, address, addressTwo } = formState;
    alert(
      `
      submitting this date:
      first name : ${firstName}
      last name : ${lastName}
      address : ${address}
      address two : ${addressTwo}
      `
    ); 
    setFormState(emptyState);
  };
  return (
    <Box className={classes.container}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          className={classes.textField}
          required
          value={formState.firstName}
          onChange={e => handleChange('firstName', e.target.value)}
          label="FIRST NAME"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          required
          value={formState.lastName}
          onChange={e => handleChange('lastName', e.target.value)}
          label="LAST NAME"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          required
          value={formState.address}
          onChange={e => handleChange('address', e.target.value)}
          label="ADDRESS"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          value={formState.addressTwo}
          onChange={e => handleChange('addressTwo', e.target.value)}
          label="ADRESS 2 (OPTIONAL)"
          variant="outlined"
        />
      </form>
      <Button
        disabled={!isValidForm()}
        onClick={handleClick}
        className={classes.button}
      >
        next <img src={whiteArrow} alt={'Logo'} />
      </Button>
    </Box>
  );
};
