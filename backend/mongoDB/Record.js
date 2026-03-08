import mongoose from "mongoose";

const recordSchema = new mongoose.Schema(
  {
    Player: {
      type: Number,
      required: true,
    },
    Match: {
      type: Number,
      required: true,
    },
    fromMinutes: {
      type: Number,
      required: true,
      min: 0,
    },
    toMinutes: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true },
);

const Record = mongoose.model("Record", recordSchema);

export default Record;
