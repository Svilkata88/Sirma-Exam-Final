import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    TeamNumber: {
      type: Number,
      required: true,
    },
    Position: {
      type: String,
      required: true,
      uppercase: true,
    },
    FullName: {
      type: String,
      required: true,
      trim: true,
    },
    Team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
  },
  { timestamps: true },
);

const Player = mongoose.model("Player", playerSchema);

export default Player;
