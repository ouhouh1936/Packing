const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model(`User`, User, `User`);
