import React from "react";

function MatchCard({ match }) {
  return (
    <div className="bg-zinc-200 p-3 rounded-md shadow-[0px_0px_8px_0px_rgba(179,179,188,1)] w-85 h-30">
      <div className="flex gap-2 justify-center items-center">
        <p className="text-sm font-semibold text-center mb-2">{match.Date}</p>
        <p className="text-sm font-semibold text-center mb-2">
          Group: {match.ATeam.Group}
        </p>
      </div>
      <div className="flex gap-2 justify-between items-center">
        <div className="w-[110px]">
          <img
            className="w-6 h-6 object-cover m-auto mb-2"
            src={`flags/${match.ATeam.Name.toLowerCase()}.png`}
            alt={match.ATeam.Name.toLowerCase()}
          />
          <p className="text-md text-center">{match.ATeam.Name}</p>
        </div>

        <p className="text-lg">{match.Score}</p>

        <div className="w-[110px]">
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
