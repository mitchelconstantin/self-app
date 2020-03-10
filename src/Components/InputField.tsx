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
      borderRadius: '6px'
    },
    borderRadius: '6px',
    marginBottom: '12px',
    height: '48px',
    '& input:valid': {
      backgroundColor: '#EAEAEA',
    },
    '& input:focus': {
      backgroundColor: '#FFFFFF',
      borderColor: '#00ADEE'
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
        onBlur={required && validateField}
        value={field.value}
        onChange={changeField}
        variant="outlined"
      />
    </>
  );
};
