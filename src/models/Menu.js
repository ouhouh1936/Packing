const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Menu = new Schema(
  {
    menuName: {
      type: String,
      required: true,
    },
    isDelete: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model(`Menu`, Menu, `Menu`);
