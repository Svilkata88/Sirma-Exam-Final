import mongoose from "mongoose";

const matchSchema = new mongoose.Schema(
  {
    ATeamID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
    BTeamID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
    Date: {
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
