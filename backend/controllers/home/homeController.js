import Match from "../../mongoDB/Match.js";

const getHome = async (req, res) => {
  const matches = await Match.aggregate([
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
    {
      $unwind: "$ATeam",
    },
    {
      $unwind: "$BTeam",
    },
  ]);
  res.json({
    message: "Matches",
    matches: matches,
  });
};

export { getHome };
