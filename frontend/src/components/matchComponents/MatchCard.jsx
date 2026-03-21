import { normalizedDate, findTheWinner } from "../../../utils";
import { useDateContext } from "../../hookes/useDate";

function MatchCard({ match, layout = "w-75 h-30 lg:w-80 xl:w-100 2xl:w-80" }) {
  const [dateType] = useDateContext();
  const [homeScore, awayScore] = findTheWinner(match.Score);

  return (
    <div
      className={`bg-zinc-200 p-3 rounded-md shadow-[0px_0px_8px_0px_rgba(179,179,188,1)] ${layout}`}
    >
      <div className="match-card-header-container">
        <p className="w-1/4 bg-green-400 text-center rounded-md w-13 xl:w-15 2xl:w-18 text-gray-800 font-semibold">
          {homeScore > awayScore ? "winner" : ""}
        </p>
        <div className="flex gap-2 font-semibold text-center w-1/2 justify-center items-center">
          <img src="date.png" alt="date" className="w-5 h-5" />{" "}
          {normalizedDate(match.date, dateType)}
        </div>
        <p className="w-1/4 bg-green-400 text-center rounded-md w-13 xl:w-16 2xl:w-17 text-gray-800 font-semibold">
          {homeScore < awayScore ? "winner" : ""}
        </p>
      </div>
      <div className="flex gap-2 justify-between items-center">
        <div className="w-[85px] overflow-hidden">
          <img
            className="w-6 h-6 object-cover m-auto mb-2"
            src={`flags/${match.ATeam.Name.toLowerCase()}.png`}
            alt={match.ATeam.Name.toLowerCase()}
          />
          <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-center">
            {match.ATeam.Name}
          </p>
        </div>

        <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          {match.Score}
        </p>

        <div className="w-[85px] overflow-hidden">
          <img
            className="w-6 h-6 object-cover m-auto mb-2"
            src={`flags/${match.BTeam.Name.toLowerCase()}.png`}
            alt={match.BTeam.Name.toLowerCase()}
          />
          <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-center">
            {match.BTeam.Name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
