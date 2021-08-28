const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Store = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isDelete: {
      type: Boolean,
      required: true,
      default: false,
    },
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `Type`,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `User`,
    },
    menus: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Menu`,
      },
    ],
  },
  { versionKey: false }
);

module.exports = mongoose.model(`Store`, Store, `Store`);
