import Match from "../../mongoDB/Match.js";
import fs from "fs";

async function createDatabaseController(req, res) {
  try {
    const buffer = req.body + "\n";
    fs.writeFileSync("dump.csv", buffer, { flag: "a" });
    if (!req.body) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // const matches = req.files.matches;
    // console.log(matches);

    // Object.values(files).map(async (f) => {
    //   if (f.name === "matches.csv") {
    //     const matches = [];

    //     const text = await f.text();
    //     const lines = text.split(/\r?\n/).slice(1, -1);
    //     lines.map((line) => {
    //       const elements = line.split(",");
    //       const ID = parseInt(elements[0]);
    //       const AteamID = parseInt(elements[1]);
    //       const BTeamID = parseInt(elements[2]);
    //       const date = new Date(elements[3]);
    //       const Score = elements[4];
    //       const match = { ID, AteamID, BTeamID, date, Score };

    //       matches.push(match);
    //     });
    //   }
    // });

    // const insertedMatches = await Match.insertMany(matches);
    // console.log("Matches data inserted successfully");
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Failed to insert matches", error: err });
  }
}

export default createDatabaseController;
