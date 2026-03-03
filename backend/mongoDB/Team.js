import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    ManagerFullName: {
      type: String,
      required: true,
      trim: true,
    },
    Group: {
      type: String,
      required: true,
      uppercase: true,
    },
  },
  {
    timestamps: true,
  },
);

const Team = mongoose.model("Team", teamSchema);

export default Team;
