import React, { useContext, useState, useEffect } from "react";

import useFetch from "../hoocks/useFetch";
import useAlert from "../hoocks/useAlert";

import AuthContext from "../context/Auth.context";

import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import FormDialog from "../components/NoteForm.component";
import PaginationControlled from "../components/Pagination.component";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable() {
  const classes = useStyles();

  const [count, setCount] = useState(0);
  const [notesOnPage, setNotesOnPage] = useState(0);
  const { request } = useFetch();
  const { AlertComponent, setAlert } = useAlert();
  const { isAuth, getNoteIds, token } = useContext(AuthContext);
  const noteIds = getNoteIds();

  const [notes, setNotes] = useState([]);

  async function getNotes(page = 1) {
    try {
      const res = await request(`/api/table/${page}`, "GET");
      const { notes, count, notesOnList } = res.data;
      setNotes(notes);
      setCount(count);
      setNotesOnPage(notesOnList);
      setAlert.info(res.message);
    } catch (e) {
      console.log(e.message);
      setAlert.error(e.message);
    }
  }

  const deleteHandler = async noteId => {
    try {
      const res = await request("/api/table", "DELETE", { token, noteId });
      setAlert.success(res.message);
      setNotes([...notes.filter(note => note._id !== noteId)]);
    } catch (e) {
      console.log(e.message);
      setAlert.error(e.message);
    }
  };

  const updateHandler = async note => {
    try {
      const res = await request("/api/table", "PUT", { token, note });
      const upNote = res.data;
      const index = notes.findIndex(n => n._id === upNote._id);
      const upNotes = [...notes];
      upNotes[index] = upNote;
      setNotes([...upNotes]);
      setAlert.success(res.message);
    } catch (e) {
      console.log(e.message);
      setAlert.error(e.message);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <Container component='main'>
      <AlertComponent />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>ID</TableCell>
              <TableCell align='left'>First name</TableCell>
              <TableCell align='left'>Last name</TableCell>
              <TableCell>Comment</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Controls</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notes &&
              notes.length &&
              notes.map(note => (
                <TableRow key={note._id}>
                  <TableCell component='th' scope='row'>
                    {note._id}
                  </TableCell>
                  <TableCell align='left'>{note.firstName}</TableCell>
                  <TableCell align='left'>{note.lastName}</TableCell>
                  <TableCell>{note.comment}</TableCell>
                  <TableCell>{note.author}</TableCell>
                  <TableCell>
                    {isAuth && noteIds.includes(note._id) && (
                      <ButtonGroup>
                        <FormDialog note={note} update={updateHandler} />
                        <IconButton
                          color='secondary'
                          onClick={() => deleteHandler(note._id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ButtonGroup>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationControlled
        getNotes={getNotes}
        count={count}
        notesOnPage={notesOnPage}
      />
    </Container>
  );
}
