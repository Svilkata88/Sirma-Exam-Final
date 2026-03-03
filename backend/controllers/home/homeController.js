import Match from "../../mongoDB/Match.js";

const getHome = async (req, res) => {
  // const targetDate = new Date("6/26/2024");
  // const matches = await Match.find({});
  // const matches = await Match.aggregate([
  //   // {
  //   //   $match: { Date: { $lte: targetDate } }, // filter by date first
  //   // },
  //   {
  //     $lookup: {
  //       from: "teams",
  //       localField: "ATeamID",
  //       foreignField: "ID",
  //       as: "ATeam",
  //     },
  //   },
  //   {
  //     $lookup: {
  //       from: "teams",
  //       localField: "BTeamID",
  //       foreignField: "ID",
  //       as: "BTeam",
  //     },
  //   },
  //   {
  //     $unwind: "$ATeam",
  //   },
  //   {
  //     $unwind: "$BTeam",
  //   },
  // ]);
  // res.json({
  //   message: "Matches",
  //   matches: matches,
  // });
};

export { getHome };
