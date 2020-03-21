import React, { useState } from "react";

import useForm from "../hoocks/useForm";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

export default function FormDialog({ note, update }) {
  const [open, setOpen] = useState(false);
  const { form, changeFormHandler, resetForm } = useForm(note);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    update(form);
    handleClose();
  };

  const handleCancel = () => {
    resetForm();
    handleClose();
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Update table note</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To update table note enter First name, Last name and Comment
            (optional)
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='firstName'
            label='First name'
            name='firstName'
            type='text'
            fullWidth
            onChange={changeFormHandler}
            value={form.firstName}
          />
          <TextField
            margin='dense'
            id='lastName'
            label='Last name'
            type='text'
            name='lastName'
            fullWidth
            onChange={changeFormHandler}
            value={form.lastName}
          />
          <TextField
            margin='dense'
            id='comment'
            label='Comment'
            type='text'
            name='comment'
            fullWidth
            onChange={changeFormHandler}
            value={form.comment}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color='default'>
            Cancel
          </Button>
          <Button color='primary' onClick={handleUpdate}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
