import React, { useContext } from "react";
import { Link as RouterLink, useHistory, useLocation } from "react-router-dom";

import useFetch from "../hoocks/useFetch";
import useForm from "../hoocks/useForm";
import useAlert from "../hoocks/useAlert";

import AuthContext from "../context/Auth.context";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const { isFetching, request } = useFetch();
  const { login } = useContext(AuthContext);
  const { AlertComponent, setAlert } = useAlert();
  const { form, changeFormHandler, resetForm } = useForm({
    email: "",
    password: "",
  });

  const submitHandler = async () => {
    try {
      const res = await request(`/api/auth/login`, "POST", form);
      login(res.data.token, res.data.user);
      setAlert.info(res.message);
      resetForm();
      history.replace(from);
    } catch (e) {
      console.log(e.message);
      setAlert.error(e.message);
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <AlertComponent />
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            value={form.email}
            onChange={changeFormHandler}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={form.password}
            onChange={changeFormHandler}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={submitHandler}
            disabled={isFetching}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <RouterLink to='/register'>
                <Link variant='body2'>{"Don't have an account? Sign Up"}</Link>
              </RouterLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
