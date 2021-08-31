const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model(`User`, User, `User`);
