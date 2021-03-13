import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useThemeProps } from '@material-ui/data-grid';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePicker(props) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        onChange={(e) => props.setDate(e.target.value)}
        id="date"
        label={props.label}
        type="date"
        defaultValue={props.defaultDate}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}