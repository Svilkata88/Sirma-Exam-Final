import { findTheWinner } from "../../../utils";

function SchemaMatchCard({ match, positioning }) {
  return (
    <div
      className={`flex justify-between items-center w-16 sm:w-32 md:w-40 lg:w-44 ml-1 sm:p-1 text-zinc-100 md:ml-2 ${positioning}`}
    >
      <div className="flex items-center pt-auto w-3 h-3 sm:w-10">
        <img
          className="sm:w-5 sm:h-5 md:w-6 md:h-6 object-cover m-auto mb-2"
          src={`flags/${match.ATeam.Name.toLowerCase()}.png`}
          alt={match.ATeam.Name.toLowerCase()}
        />
      </div>

      <p className="text-[8px] sm:text-base md:text-lg">
        {findTheWinner(match.Score).join("-")}
      </p>

      <div className="flex items-center pt-auto w-3 h-3 sm:w-10">
        <img
          className="sm:w-5 sm:h-5 md:w-6 md:h-6 object-cover m-auto mb-2"
          src={`flags/${match.BTeam.Name.toLowerCase()}.png`}
          alt={match.BTeam.Name.toLowerCase()}
        />
      </div>
    </div>
  );
}

export default SchemaMatchCard;
