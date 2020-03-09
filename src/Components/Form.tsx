import React, { useState } from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import whiteArrow from '../Assets/White_Arrow.svg';
import { InputField } from './TextField';

// const useStyles = makeStyles(theme => ({
//   container: {
//     backgroundColor: '#585858',
//     paddingTop: '32px',
//     [theme.breakpoints.down('sm')]: {
//       paddingBottom: '32px',
//       paddingLeft: '8px',
//       width: '100vw'
//     },
//     [theme.breakpoints.up('md')]: {
//       paddingRight: '80px',
//       paddingLeft: '168px',
//       height: '100vh'
//     }
//   },
//   info: {
//     [theme.breakpoints.down('sm')]: {
//       width: '100vw'
//     },
//     [theme.breakpoints.up('md')]: {
//       width: '535px'
//     }
//   },
//   logo: {
//     height: '26px',
//     width: '177px'
//   },
//   title: {
//     color: '#FFFFFF',
//     paddingTop: '32px',
//     [theme.breakpoints.down('sm')]: {
//       fontSize: '24px'
//     },
//     [theme.breakpoints.up('md')]: {
//       fontSize: '32px'
//     }
//   },
//   subTitle: {
//     color: '#EAEAEA ',
//     fontSize: '14px '
//   }
// }));

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '24px',
      paddingRight: '24px',
      paddingTop: '32px'
    },
    [theme.breakpoints.up('md')]: {
      width: '376px',
      paddingLeft: '8px',
      paddingRight: '8px',
      paddingTop: '60px'
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '48px'
  },
  button: {
    backgroundColor: '#FFAB44',
    color: '#FFFFFF',
    fontSize: '16px',
    borderRadius: '6px',
    height: '48px',
    marginTop: '36px',
    paddingLeft: '24p',
    paddingRight: '24px',
    [theme.breakpoints.down('sm')]: {
      // paddingTop: '32px'
    },
    [theme.breakpoints.up('md')]: {
      width: '100px',
    }
  }
}));

const emptyState = {
  firstName: { value: '', error: false },
  lastName: { value: '', error: false },
  address: { value: '', error: false },
  addressTwo: { value: '', error: false }
};
export const Form = () => {
  const classes = useStyles();
  const [formState, setFormState] = useState(emptyState);

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
      <InputField
        field={formState.firstName}
        validateField={() => validateField('firstName')}
        changeField={(e: any) => handleChange('firstName', e.target.value)}
        label="first name"
        required
      />
      <InputField
        field={formState.lastName}
        validateField={() => validateField('lastName')}
        changeField={(e: any) => handleChange('lastName', e.target.value)}
        label="last name"
        required
      />
      <InputField
        field={formState.address}
        validateField={() => validateField('address')}
        changeField={(e: any) => handleChange('address', e.target.value)}
        label="address"
        required
      />
      <InputField
        field={formState.addressTwo}
        changeField={(e: any) => handleChange('addressTwo', e.target.value)}
        label="address two(optional)"
        required
      />
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
