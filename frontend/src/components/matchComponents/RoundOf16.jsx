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
  const [width, setWidth] = useState(window.innerWidth);

  // detecs window resizing and keep the width in state
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // positioning the teams in the schema picture
  const positons = [
    `absolute ${width < 768 ? "top-11" : width < 1024 ? "top-13" : "top-15"} left-2`,
    `absolute ${width < 768 ? "top-21" : width < 1024 ? "top-23" : "top-27"} left-2`,
    `absolute ${width < 768 ? "top-31" : width < 1024 ? "top-35" : "top-40"} left-2`,
    `absolute ${width < 768 ? "top-41" : width < 1024 ? "top-46" : "top-52"} left-2`,
    `absolute ${width < 768 ? "top-51" : width < 1024 ? "top-58" : "top-65"} left-2`,
    `absolute ${width < 768 ? "top-60" : width < 1024 ? "top-69" : "top-77"} left-2`,
    `absolute ${width < 768 ? "top-71" : width < 1024 ? "top-80" : "top-90"} left-2`,
    `absolute ${width < 768 ? "top-80" : width < 1024 ? "top-91" : "top-102"} left-2`,
  ];

  // returns only matches for this tournament stage
  const matchesRound16 = matches.filter((match) => {
    const matchDate = new Date(match.date);
    return matchDate > startDate && matchDate < endDate;
  });

  // if query return only filtered matches
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

      <div className="flex flex-col gap-5 mx-5 xl:flex-row">
        <div className="relative w-160 md:w-180 lg:w-200 m-auto rounded-lg overflow-hidden">
          <img src="/schema.png" alt="schema" className="w-full h-full" />

          {matchesRound16.map((match, i) => {
            const pos = positons[i];

            return (
              <SchemaMatchCard
                key={match._id}
                match={match}
                positioning={pos}
              />
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-2 items-center justify-items-center pb-5 xl:gap-3 md:w-180 m-auto">
          {matches.map((match) => {
            const matchDate = new Date(match.date);
            if (matchDate > startDate && matchDate < endDate) {
              return (
                <div key={match._id}>
                  <Link to={match._id}>
                    <MatchCard
                      match={match}
                      layout="w-75 h-26 lg:w- h-28 xl:w-70 2xl:w-90"
                    />
                  </Link>
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
