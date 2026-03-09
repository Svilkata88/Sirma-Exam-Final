import { useEffect, useState } from "react";
import MatchCard from "./matchCard";
import { Link } from "react-router-dom";
import Spinner from "../others/Spinner";
import { useSearchContext } from "../../hookes/useSearch";
import { useMatchContext } from "../../hookes/useMatches";

function SemiFinals() {
  const [allMatches, setAllMatches, matches, setMatches, loading] =
    useMatchContext();
  const [query] = useSearchContext();
  const startDate = new Date("2024-07-06");
  const endDate = new Date("2024-07-10");

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
        Semi-finals
      </h1>
      <h2 className="border-t border-gray-300 p-4 mx-5 text-green-200"></h2>

      <div className="grid grid-cols-2 gap-4 items-center justify-items-center pb-10 w-2/3 m-auto">
        {matches.map((match) => {
          const matchDate = new Date(match.date);

          if (matchDate > startDate && matchDate < endDate) {
            return (
              <Link to={match._id} key={match._id}>
                <MatchCard match={match} />
              </Link>
            );
          }

          return null;
        })}
      </div>
    </>
  );
}

export default SemiFinals;
