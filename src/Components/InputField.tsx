import React from 'react';
import { TextField, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles({
  label: {
    textTransform: 'uppercase',
    color: '#666666',
    fontFamily: 'Merriweather',
    fontWeight: 500,
    marginTop: '12px'
  },
  errorLabel: {
    color: '#E70000'
  },
  textField: {
    [`& fieldset`]: {
      borderRadius: '6px',
    },
    borderRadius: '6px',
    marginBottom: '12px',
    height: '48px',
    '& input:valid': {
      backgroundColor: '#EAEAEA',
      borderColor: 'blue'
    },
    '& input:focus': {
      backgroundColor: '#FFFFFF',
    }
  }
});

interface props {
  field: any;
  changeField: any;
  label: string;
  validateField?: any;
  required?: boolean;
}

export const InputField = ({
  field,
  validateField,
  changeField,
  label,
  required
}: props) => {
  const classes = useStyles();
  const formattedLabel = field.error ? `${label} required` : label;
  if (!required) {
    return (
      <>
        <Typography className={classes.label}>{formattedLabel}</Typography>
        <TextField
          className={classes.textField}
          value={field.value}
          //@ts-ignore
          onChange={changeField}
          variant="outlined"
        />
      </>
    );
  }
  return (
    <>
      <Typography
        className={clsx(classes.label, { [classes.errorLabel]: field.error })}
      >
        {formattedLabel}
      </Typography>
      <TextField
        className={classes.textField}
        error={field.error}
        onBlur={validateField}
        value={field.value}
        onChange={changeField}
        variant="outlined"
      />
    </>
  );
};
