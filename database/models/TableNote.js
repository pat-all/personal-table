const { Schema, model } = require("mongoose");

const schema = new Schema({
  author: { type: String, minlength: 1, required: true, trim: true },
  firstName: { type: String, minlength: 1, required: true, trim: true },
  lastName: { type: String, minlength: 1, required: true, trim: true },
  comment: { type: String, trim: true },
});

module.exports = model("TableNote", schema);
