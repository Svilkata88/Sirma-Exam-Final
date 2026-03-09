import { useEffect, useState } from "react";
import MatchCard from "./matchCard";
import SchemaMatchCard from "./SchemaMatchCard";
import { Link } from "react-router-dom";
import Spinner from "../others/Spinner";
import { useSearchContext } from "../../hookes/useSearch";
import { useMatchContext } from "../../hookes/useMatches";

function RoundOf16() {
  const [allMatches, setAllMatches, matches, setMatches, loading] =
    useMatchContext();
  const startDate = new Date("2024-06-26");
  const endDate = new Date("2024-07-02");
  const [query] = useSearchContext();
  const positons = [
    `absolute top-51 left-5`,
    `absolute top-62 left-5`,
    `absolute top-75 left-5`,
    `absolute top-87 left-5`,
    `absolute top-100 left-5`,
    `absolute top-112 left-5`,
    `absolute top-125 left-5`,
    `absolute top-136 left-5`,
  ];
  let i = 0;

  useEffect(() => {
    if (!query) {
      setMatches(allMatches);
      return;
    }

    const lowerCasedQuery = query.toLowerCase();

    const filteredMatches = allMatches.filter((m) => {
      const ATeam = m.ATeam.Name.toLowerCase();
      const BTeam = m.BTeam.Name.toLowerCase();

      return ATeam.includes(lowerCasedQuery) || BTeam.includes(lowerCasedQuery);
    });

    setMatches(filteredMatches);
  }, [query, allMatches]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <h1 className="text-2xl font-bold text-center mb-4 pt-4 text-green-300">
        Round of 16
      </h1>
      <h2 className="border-t border-gray-300 p-4 mx-5 text-green-200"></h2>

      <div className="flex gap-5 mx-5">
        <div className="w-200 rounded-md overflow-hidden relative">
          <img src="/schema.png" alt="schema" />
        </div>

        <div className="grid grid-cols-2 gap-4 items-center justify-items-center ">
          {matches.map((match) => {
            const matchDate = new Date(match.date);
            if (matchDate > startDate && matchDate < endDate) {
              const pos = positons[i];
              i++;

              return (
                <div key={match._id}>
                  <Link to={match._id}>
                    <MatchCard match={match} />
                  </Link>
                  <SchemaMatchCard match={match} positioning={pos} />
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </>
  );
}

export default RoundOf16;
