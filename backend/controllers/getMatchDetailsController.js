import Match from "../mongoDB/Match.js";
import Player from "../mongoDB/Player.js";
import mongoose from "mongoose";

const getMatchDetailsController = async (req, res) => {
  const id = req.params.id;

  const matches = await Match.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(id) } },
    {
      $lookup: {
        from: "teams",
        localField: "ATeamID",
        foreignField: "ID",
        as: "ATeam",
      },
    },
    {
      $lookup: {
        from: "teams",
        localField: "BTeamID",
        foreignField: "ID",
        as: "BTeam",
      },
    },
    { $unwind: "$ATeam" },
    { $unwind: "$BTeam" },
  ]);
  const playersTeamATeam = await Player.find({ Team: matches[0].ATeam.ID });
  const playersTeamBTeam = await Player.find({ Team: matches[0].BTeam.ID });

  res.json({
    match: matches[0],
    teamA: playersTeamATeam,
    teamB: playersTeamBTeam,
  });
};

export default getMatchDetailsController;
