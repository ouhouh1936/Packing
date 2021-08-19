import mongoose from "mongoose";

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

export default mongoose.model(`User`, User, `User`);
