import { normalizedDate, findTheWinner } from "../../../utils";
import { useDateContext } from "../../hookes/useDate";

function MatchCard({ match }) {
  const [dateType] = useDateContext();
  const [homeScore, awayScore] = findTheWinner(match.Score);

  return (
    <div className="bg-zinc-200 p-3 rounded-md shadow-[0px_0px_8px_0px_rgba(179,179,188,1)] w-85 h-30">
      <div className="flex gap-2 justify-center items-center mb-2">
        <p className="text-sm w-1/4 bg-green-400 text-center rounded-md  w-13 text-gray-800 font-semibold">
          {homeScore > awayScore ? "winner" : ""}
        </p>
        <div className="flex gap-2 text-sm font-semibold text-center w-1/2 justify-center items-center">
          <img src="date.png" alt="date" className="w-5 h-5" />{" "}
          {normalizedDate(match.date, dateType)}
        </div>
        <p className="text-sm w-1/4 bg-green-400 text-center rounded-md  w-13 text-gray-800 font-semibold">
          {homeScore < awayScore ? "winner" : ""}
        </p>
      </div>
      <div className="flex gap-2 justify-between items-center">
        <div className="w-[85px] px]">
          <img
            className="w-6 h-6 object-cover m-auto mb-2"
            src={`flags/${match.ATeam.Name.toLowerCase()}.png`}
            alt={match.ATeam.Name.toLowerCase()}
          />
          <p className="text-md text-center">{match.ATeam.Name}</p>
        </div>

        <p className="text-lg">{match.Score}</p>

        <div className="w-[85px]">
          <img
            className="w-6 h-6 object-cover m-auto mb-2"
            src={`flags/${match.BTeam.Name.toLowerCase()}.png`}
            alt={match.BTeam.Name.toLowerCase()}
          />
          <p className="text-md text-center">{match.BTeam.Name}</p>
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
