import { findTheWinner } from "../../../utils";

function SchemaMatchCard({ match, positioning }) {
  return (
    <div className={`p-1 text-zinc-100 ${positioning}`}>
      <div className="flex justify-between items-center">
        <div className="w-[85px] px]">
          <img
            className="w-6 h-6 object-cover m-auto mb-2"
            src={`flags/${match.ATeam.Name.toLowerCase()}.png`}
            alt={match.ATeam.Name.toLowerCase()}
          />
        </div>

        <p className="text-lg">{findTheWinner(match.Score).join("-")}</p>

        <div className="w-[85px]">
          <img
            className="w-6 h-6 object-cover m-auto mb-2"
            src={`flags/${match.BTeam.Name.toLowerCase()}.png`}
            alt={match.BTeam.Name.toLowerCase()}
          />
        </div>
      </div>
    </div>
  );
}

export default SchemaMatchCard;
