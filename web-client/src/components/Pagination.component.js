import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles(theme => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControlled({ getNotes, count, notesOnPage }) {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const totalCount = Math.ceil(count / notesOnPage);

  const handleChange = (event, value) => {
    setPage(value);
    getNotes(value);
  };

  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      {totalCount > 1 && (
        <Pagination count={totalCount} page={page} onChange={handleChange} />
      )}
    </div>
  );
}
