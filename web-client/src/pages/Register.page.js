import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const { isFetching, request } = useFetch();
  const { login } = useContext(AuthContext);
  const { form, changeFormHandler, resetForm } = useForm({
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const { AlertComponent, setAlert } = useAlert();

  const submitHandler = async () => {
    try {
      const res = await request(`/api/auth/register`, "POST", form);
      login(res.data.token, res.data.user);
      setAlert.success(res.message);
      resetForm();
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
          Sign up
        </Typography>
        <AlertComponent />
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete='fname'
                name='username'
                variant='outlined'
                required
                fullWidth
                id='username'
                label='User Name'
                autoFocus
                value={form.username}
                onChange={changeFormHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                value={form.email}
                onChange={changeFormHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='confirmpassword'
                label='Confirm Password'
                type='password'
                id='confirmpassword'
                autoComplete='current-password'
                value={form.confirmpassword}
                onChange={changeFormHandler}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={submitHandler}
            disabled={isFetching}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <RouterLink to='/authorization'>
                <Link variant='body2'>Already have an account? Sign in</Link>
              </RouterLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
