import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    ID: {
      type: Number,
      required: true,
    },
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
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const Player = mongoose.model("Player", playerSchema);

export default Player;
