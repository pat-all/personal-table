import React from "react";
import { NavLink } from "react-router-dom";

import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const navClass = {
  color: "white",
  textDecoration: "none",
};

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Personal table
          </Typography>
          <Button color='inherit'>
            <NavLink style={navClass} to='/'>
              Docs
            </NavLink>
          </Button>
          <Button color='inherit'>
            <NavLink style={navClass} to='/new'>
              New
            </NavLink>
          </Button>
          <Button color='inherit'>
            <NavLink style={navClass} to='/table'>
              Table
            </NavLink>
          </Button>
          <Button color='inherit'>
            <NavLink style={navClass} to='/login'>
              Login
            </NavLink>
          </Button>
          <Link
            style={navClass}
            href='https://github.com/pat-all/personal-table'
          >
            <GitHubIcon />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
