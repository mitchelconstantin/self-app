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
  firstName: {
    value: '',
    error: false
  },
  lastName: { value: '', error: false },
  address: { value: '', error: false },
  addressTwo: { value: '', error: false }
};
export const Form = () => {
  const classes = useStyles();
  const [formState, setFormState] = useState(emptyState);
  // const [errors, setErrors] = useState;

  const handleChange = (type: string, newValue: any) => {
    //@ts-ignore
    setFormState((prev: any) => ({
      ...prev,
      //@ts-ignore
      [type]: { ...prev[type], value: newValue }
    }));
  };
  const isValidForm = (): boolean =>
    Boolean(
      formState.firstName.value &&
        formState.lastName.value &&
        formState.address.value
    );

  const handleClick = () => {
    alert(
      `
      submitting this date:
      first name : ${formState.firstName.value}
      last name : ${formState.lastName.value}
      address : ${formState.address.value}
      address two : ${formState.addressTwo.value}
      `
    );
    setFormState(emptyState);
  };

  const validateField = (fieldName: string) => {
    //@ts-ignore
    if (formState[fieldName].value) {
      setFormState((prev: any) => ({
        ...prev,
        [fieldName]: { ...prev[fieldName], error: false }
      }));
      return;
    }
    setFormState((prev: any) => ({
      ...prev,
      [fieldName]: { ...prev[fieldName], error: true }
    }));
  };

  return (
    <Box className={classes.container}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          className={classes.textField}
          required
          error={formState.firstName.error}
          onBlur={() => validateField('firstName')}
          value={formState.firstName.value}
          onChange={e => handleChange('firstName', e.target.value)}
          label="FIRST NAME"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          required
          error={formState.lastName.error}
          onBlur={() => validateField('lastName')}
          value={formState.lastName.value}
          onChange={e => handleChange('lastName', e.target.value)}
          label="LAST NAME"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          required
          error={formState.address.error}
          onBlur={() => validateField('address')}
          value={formState.address.value}
          onChange={e => handleChange('address', e.target.value)}
          label="ADDRESS"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          value={formState.addressTwo.value}
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
