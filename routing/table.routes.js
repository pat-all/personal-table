const { Router } = require("express");
const config = require("config");

const router = Router();

const TableNote = require("../database/models/TableNote");

const {
  listNumberValidator,
  noteValidation,
} = require("../middlewares/req.validation.middlewares");

const {
  isLogginedValidator,
} = require("../middlewares/auth.validation.middlewares");

router.get("/:num", [listNumberValidator], async (req, res) => {
  try {
    const notes = await TableNote.find();
    //get by num
    const { num } = req.params;
    const count = notes.length;
    const notesOnList = config.get("notesOnList");
    const firstNoteNum = (num - 1) * notesOnList;
    let resultList = [];

    if (firstNoteNum > count) {
      res.json({ message: "we haven't so much notes" });
    } else {
      resultList = notes.slice(
        firstNoteNum,
        firstNoteNum + notesOnList > count ? count : firstNoteNum + notesOnList
      );
    }
    //send response
    res.status(200).json({
      message: `got ${resultList.length} notes`,
      data: { notes: resultList, count, notesOnList },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error! we have some problems" });
  }
});

router.post("/", [isLogginedValidator, noteValidation], async (req, res) => {
  try {
    const { user, note } = req.body;
    const tableNote = new TableNote({
      author: user.username,
      ...note,
    });

    user.notes.push(tableNote);
    await user.save();
    await tableNote.save();
    res
      .status(201)
      .json({ message: "note was added successfully", data: tableNote });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Error! we have some problems" });
  }
});

router.put("/", [isLogginedValidator, noteValidation], async (req, res) => {
  try {
    const { user, note } = req.body;
    if (
      user &&
      note &&
      note._id &&
      user.notes &&
      user.notes.includes(note._id)
    ) {
      try {
        const tableNote = await TableNote.findById(note._id);
        tableNote.firstName = note.firstName;
        tableNote.lastName = note.lastName;
        tableNote.comment = note.comment;
        await tableNote.save();
        res.status(200).json({ message: "note was updeted", data: tableNote });
      } catch (e) {
        console.log(e.message);
        res.status(400).json({ message: "Error! updating failed" });
      }
    } else {
      res.status(400).json({ message: "Error! updating failed" });
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Error! we have some problems" });
  }
});

router.delete("/", [isLogginedValidator], async (req, res) => {
  try {
    const { user, noteId } = req.body;
    if (user && noteId && user.notes && user.notes.includes(noteId)) {
      const deleted = await TableNote.deleteOne({ _id: noteId });
      res.status(200).json({
        message: `deleted ${deleted.n} messages`,
        data: { count: deleted.n },
      });
    } else {
      res.status(400).json({ message: "Error! deleting failed" });
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Error! we have some problems" });
  }
});

module.exports = router;
