import PlayerOnField from "./PLayerOnField.jsx";

function GameField({ team }) {
  return (
    <div className="w-80 h-120 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative rounded-lg border border-green-500 overflow-hidden">
      <img
        src="/pitch.png"
        alt="pitch"
        className="w-full h-full object-contain"
      />
      <PlayerOnField
        position="top-12 right-33"
        player={team?.startingPlayers?.FW_S}
      />
      <PlayerOnField
        position="top-20 right-10"
        player={team?.startingPlayers?.FW_R}
      />
      <PlayerOnField
        position="top-20 left-10"
        player={team?.startingPlayers?.FW_L}
      />
      <PlayerOnField
        position="top-55 right-20"
        player={team?.startingPlayers?.MF_RB}
      />
      <PlayerOnField
        position="top-55 left-20"
        player={team?.startingPlayers?.MF_LB}
      />
      <PlayerOnField
        position="top-37 right-33"
        player={team?.startingPlayers?.MF_C}
      />
      <PlayerOnField
        position="bottom-20 left-25"
        player={team?.startingPlayers?.DF_C1}
      />
      <PlayerOnField
        position="bottom-20 right-25"
        player={team?.startingPlayers?.DF_C2}
      />
      <PlayerOnField
        position="bottom-25 left-7"
        player={team?.startingPlayers?.DF_LB}
      />
      <PlayerOnField
        position="bottom-25 right-7"
        player={team?.startingPlayers?.DF_RB}
      />
      <PlayerOnField
        position="bottom-4 right-33"
        player={team?.startingPlayers?.GK}
      />
    </div>
  );
}

export default GameField;
