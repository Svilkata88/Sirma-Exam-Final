import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { startingPlayers, normalizedDate } from "../../../utils.js";
import Spinner from "./../others/Spinner.jsx";
import GameField from "./GameField.jsx";
import FullTeamList from "./FullTeamList.jsx";
import { useDateContext } from "../../hookes/useDate.jsx";

function MatchDetails() {
  const [loading, setLoading] = useState(false);
  const [match, setMatch] = useState({});
  const [teamAPlayers, setTeamAPlayers] = useState([]);
  const [teamBPlayers, setTeamBPlayers] = useState([]);
  const { id } = useParams();
  const [dateType] = useDateContext();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://f-tournament-backend-739415981315.europe-west3.run.app/api/v1/matches/${id}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setMatch(data.match || {});
        data.teamA["startingPlayers"] = startingPlayers(data.teamA);
        data.teamB["startingPlayers"] = startingPlayers(data.teamB);
        setTeamAPlayers(data.teamA || []);
        setTeamBPlayers(data.teamB || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className="text-white flex flex-col py-8 gap-5 justify-center items-center">
      <section className="flex flex-col gap-3 bg-mauve-100 text-black px-5 py-2 mb-3 py-5 rounded-xl border border-green-500">
        <h1 className="text-gray-900 text-center font-bold text-lg">
          {match?.date && normalizedDate(match.date, dateType)}
        </h1>
        <div className="flex items-center gap-2 md:gap-5 text-gray-900 font-bold px-3 py-2 rounded-xl">
          <img
            src={`/flags/${match.ATeam?.Name.toLowerCase()}.png`}
            alt={match.ATeam?.Name.toLowerCase()}
            className="w-10 h-10"
          />
          <div className="text-sm md:text-2xl">{match.ATeam?.Name}</div>
          <div className="text-sm md:text-2xl">{match.Score}</div>
          <div className="text-sm md:text-2xl">{match.BTeam?.Name}</div>
          <img
            src={`/flags/${match.BTeam?.Name.toLowerCase()}.png`}
            alt={match.BTeam?.Name.toLowerCase()}
            className="w-10 h-10"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-5 md:gap-10 justify-center">
        <div className="flex flex-col gap-2 xl:flex-row">
          <div className="hidden xl:block">
            <FullTeamList
              team={teamBPlayers}
              teamName={match.BTeam?.Name}
              manager={match.BTeam?.ManagerFullName}
            />
          </div>
          <GameField team={teamAPlayers} />
          <div className="xl:hidden">
            <FullTeamList
              team={teamAPlayers}
              teamName={match.ATeam?.Name}
              manager={match.ATeam?.ManagerFullName}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 xl:flex-row">
          <GameField team={teamBPlayers} />
          <div className="xl:block">
            <FullTeamList
              team={teamAPlayers}
              teamName={match.ATeam?.Name}
              manager={match.ATeam?.ManagerFullName}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MatchDetails;
