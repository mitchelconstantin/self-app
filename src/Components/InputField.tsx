import React from 'react';
import { TextField, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles({
  label: {
    textTransform: 'uppercase',
    color: '#666666',
    fontFamily: 'Merriweather',
    fontWeight: 500
  },
  errorLabel: {
    color: 'red'
  },
  textField: {
    marginTop: '12px',
    marginBottom: '12px',
    height: '48px',
    '& input:valid': {
      backgroundColor: '#EAEAEA'
    },
    '& input:invalid': {
      backgroundColor: 'green',
      borderColor: 'green'
      // borderWidth: 2
    },
    '& input:focus': {
      backgroundColor: '#FFFFFF',
      bordorColor: 'yellow'
      // borderLeftWidth: 6,
      // padding: '4px !important' // override inline-style
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
      <TextField
        className={classes.textField}
        error={field.error}
        value={field.value}
        //@ts-ignore
        onChange={changeField}
        label={label}
        InputLabelProps={{
          shrink: true
        }}
        variant="outlined"
      />
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
        // required
        className={classes.textField}
        error={field.error}
        onBlur={validateField}
        value={field.value}
        onChange={changeField}
        // label={formattedLabel}
        InputLabelProps={{
          shrink: true
        }}
        variant="outlined"
      />
    </>
  );
};
