const { Schema, model, Types } = require("mongoose");

const { emailRegExp } = require("../../regexp/email.regexp");

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: emailRegExp,
  },
  password: { type: String, required: true, minlength: 6 },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 1,
  },
  notes: [{ type: Types.ObjectId, ref: "TableNote" }],
});

module.exports = model("User", schema);
