import React, { useContext } from "react";

import useFetch from "../hoocks/useFetch";
import useForm from "../hoocks/useForm";
import useAlert from "../hoocks/useAlert";

import AuthContext from "../context/Auth.context";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
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

export default function NewNote() {
  const classes = useStyles();

  const { isFetching, request } = useFetch();
  const { token, addNoteId } = useContext(AuthContext);
  const { AlertComponent, setAlert } = useAlert();
  const { form, changeFormHandler, resetForm } = useForm({
    firstName: "",
    lastName: "",
    comment: "",
  });

  const submitHandler = async () => {
    try {
      const res = await request(`/api/table`, "POST", { token, note: form });
      setAlert.success(res.message);
      console.log(res.data);
      addNoteId(res.data._id);
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
          <NoteAddIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Create Note
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
                value={form.firstName}
                onChange={changeFormHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='lname'
                value={form.lastName}
                onChange={changeFormHandler}
              />
            </Grid>
          </Grid>
          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            name='comment'
            label='Comment'
            type='text'
            id='comment'
            value={form.comment}
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
            Create
          </Button>
        </form>
        <AlertComponent />
      </div>
    </Container>
  );
}
