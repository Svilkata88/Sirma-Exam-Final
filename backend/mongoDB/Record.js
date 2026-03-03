import mongoose from "mongoose";

const recordSchema = new mongoose.Schema(
  {
    Player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
      required: true,
    },
    Match: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Match",
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
