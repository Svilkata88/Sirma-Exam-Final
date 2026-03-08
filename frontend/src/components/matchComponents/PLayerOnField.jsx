import React from "react";

function PLayerOnField({ position, player }) {
  return (
    <div className={`player-on-pitch ${position}`}>
      <div className="flex items-center justify-center border border-green-500 bg-green-100 rounded-full w-8 h-8 text-s">
        {player?.TeamNumber}
      </div>
      <div className="h-1/2 text-center">{player?.FullName}</div>
    </div>
  );
}

export default PLayerOnField;
