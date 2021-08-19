import mongoose from "mongoose";

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

export default mongoose.model(`Menu`, Menu, `Menu`);
