import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SimpleAlert({ severity, message, clearAlert }) {
  const classes = useStyles();

  return (
    <ClickAwayListener onClickAway={clearAlert}>
      <div className={classes.root}>
        <Alert severity={severity}>{message}</Alert>
      </div>
    </ClickAwayListener>
  );
}
