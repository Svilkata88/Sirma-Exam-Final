import mongoose from "mongoose";

const matchSchema = new mongoose.Schema(
  {
    ATeamID: {
      type: Number,
      ref: "Team",
      required: true,
    },
    BTeamID: {
      type: Number,
      ref: "Team",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    Score: {
      type: String,
      default: "0-0",
    },
  },
  { timestamps: true },
);

const Match = mongoose.model("Match", matchSchema);

export default Match;
