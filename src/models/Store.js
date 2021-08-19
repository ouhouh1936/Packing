import mongoose from "mongoose";

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

export default mongoose.model(`Store`, Store, `Store`);
