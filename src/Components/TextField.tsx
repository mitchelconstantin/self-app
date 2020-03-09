import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  textField: {
    marginTop: '12px',
    marginBottom: '12px',
    textTransform: 'uppercase'
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
    <TextField
      className={classes.textField}
      error={field.error}
      helperText={field.error && 'REQUIRED'}
      onBlur={validateField}
      value={field.value}
      onChange={changeField}
      label={label}
      InputLabelProps={{
        shrink: true
      }}
      variant="outlined"
    />
  );
};
