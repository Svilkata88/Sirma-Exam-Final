import Match from "../../mongoDB/Match.js";
import Player from "../../mongoDB/Player.js";
import Record from "../../mongoDB/Record.js";
import Team from "../../mongoDB/Team.js";

async function createDatabaseController(req, res) {
  try {
    if (!req.body) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const buffer = req.body;
    const text = buffer.toString();
    const lines = text.split(/\r?\n/).slice(1, -1);
    const filename = req.headers["x-filename"].toLowerCase();

    if (filename === "matches.csv") {
      const matches = [];
      lines.forEach((element) => {
        map;
      });
      (line) => {
        const elements = line.split(",");
        const ID = parseInt(elements[0]);
        const ATeamID = parseInt(elements[1]);
        const BTeamID = parseInt(elements[2]);
        const date = new Date(elements[3]);
        const Score = elements[4];
        const match = { ID, ATeamID, BTeamID, date, Score };

        matches.push(match);
      };
      await Match.insertMany(matches);
      console.log("Collection matches inserted successfully!");
    } else if (filename === "players.csv") {
      const players = [];
      lines.forEach((line) => {
        const elements = line.split(",");
        const ID = parseInt(elements[0]);
        const TeamNumber = parseInt(elements[1]);
        const Position = elements[2];
        const FullName = elements[3];
        const Team = elements[4];
        const player = { ID, TeamNumber, Position, FullName, Team };

        players.push(player);
      });
      await Player.insertMany(players);
      console.log("Collection players inserted successfully!");
    } else if (filename === "records.csv") {
      const records = [];
      lines.forEach((line) => {
        const elements = line.split(",");
        const Player = parseInt(elements[1]);
        const Match = parseInt(elements[2]);
        const fromMinutes = elements[3];
        const toMinutes = elements[4] === "NULL" ? null : Number(elements[4]);
        const record = { Player, Match, fromMinutes, toMinutes };

        records.push(record);
      });
      await Record.insertMany(records);
      console.log("Collection records inserted successfully!");
    } else if (filename === "teams.csv") {
      const teams = [];
      lines.forEach((line) => {
        const elements = line.split(",");
        const ID = parseInt(elements[0]);
        const Name = elements[1];
        const ManagerFullName = elements[2];
        const Group = elements[3];
        const team = { ID, Name, ManagerFullName, Group };

        teams.push(team);
      });
      await Team.insertMany(teams);
      console.log("Collection teams inserted successfully!");
    }
    return res
      .status(200)
      .json({ message: `${filename}.csv inserted successfully` });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Failed to insert matches", error: err });
  }
}

export default createDatabaseController;
