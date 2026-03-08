import { sortPlayers } from "./../../../utils";
import { useState } from "react";

function FullTeamList({ team, teamName, manager }) {
  const [enabled, setEnabled] = useState(false);
  const sortedTeam = sortPlayers(team, enabled);
  return (
    <div className="w-80 bg-mauve-100 text-black px-6 py-5 rounded-lg border border-green-500">
      <h1 className="text-center text-xl text-bold pb-5">{teamName}</h1>
      <h2 className="text-center mb-5">
        Headcoach: <span className="font-bold">{manager}</span>
      </h2>
      <label className="flex w-fit items-center justify-end cursor-pointer mb-4 text-sm ml-auto">
        <input
          type="checkbox"
          className="sr-only peer"
          onClick={() => setEnabled((prev) => !prev)}
        />
        Sorted
        <div className="w-9 h-5 bg-gray-300 rounded-full peer-checked:bg-green-700 relative transition ml-2">
          <div
            className={`absolute ${enabled ? "right-1" : "left-1"} top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-6`}
          ></div>
        </div>
      </label>
      {sortedTeam.map((p) => (
        <div className="flex gap-2" key={p.TeamNumber}>
          <p>{p.TeamNumber}</p>
          <div className="">
            <p>{p.FullName}</p>
          </div>
          <p
            className={`ml-auto font-semibold ${p.Position === "GK" ? "text-yellow-600" : p.Position === "DF" ? "text-red-800" : p.Position === "MF" ? "text-green-800" : "text-indigo-800"}`}
          >
            {p.Position}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FullTeamList;
