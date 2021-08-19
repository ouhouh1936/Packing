import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Type = new Schema(
  {
    typeName: {
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

export default mongoose.model(`Type`, Type, `Type`);