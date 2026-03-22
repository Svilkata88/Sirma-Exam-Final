import { sortPlayers } from "./../../../utils";
import { useRef, useState } from "react";

function FullTeamList({ team, teamName, manager }) {
  const [enabled, setEnabled] = useState(false);
  const sortedTeam = sortPlayers(team, enabled);
  const teamRef = useRef(null);
  const buttonRef = useRef(null);

  function showTeamDetails() {
    teamRef.current.classList.toggle("hidden");
    buttonRef.current.classList.toggle("hidden");
  }

  return (
    <>
      <button
        className="flex gap-2 items-center justify-center xl:hidden w-80 bg-mauve-100 text-black px-6 py-3 rounded-lg border border-green-500"
        onClick={showTeamDetails}
        ref={buttonRef}
      >
        Team details
        <img src="/team-details.png" alt="team-details" className="w-8 h-8" />
      </button>
      <div
        className="hidden xl:block w-80 bg-mauve-100 text-black px-6 py-5 rounded-lg border border-green-500 relative"
        ref={teamRef}
      >
        <button
          className="absolute top-5 right-5 w-8 h-8 xl:hidden"
          onClick={showTeamDetails}
        >
          <img src="/close.png" alt="close" />
        </button>
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
    </>
  );
}

export default FullTeamList;
