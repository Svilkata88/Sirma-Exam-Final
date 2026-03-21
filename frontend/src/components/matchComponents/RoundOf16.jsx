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
  const endDate = new Date("2024-07-03");
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
    `absolute ${width < 640 ? "top-7" : width < 768 ? "top-9.5" : width < 1024 ? "top-11" : "top-13"} left-2`,
    `absolute ${width < 640 ? "top-12" : width < 768 ? "top-18.5" : width < 1024 ? "top-22" : "top-24.5"} left-2`,
    `absolute ${width < 640 ? "top-18" : width < 768 ? "top-28" : width < 1024 ? "top-33" : "top-37.5"} left-2`,
    `absolute ${width < 640 ? "top-23" : width < 768 ? "top-37" : width < 1024 ? "top-44" : "top-49"} left-2`,
    `absolute ${width < 640 ? "top-29" : width < 768 ? "top-47" : width < 1024 ? "top-56" : "top-62.5"} left-2`,
    `absolute ${width < 640 ? "top-34" : width < 768 ? "top-56" : width < 1024 ? "top-67" : "top-74.5"} left-2`,
    `absolute ${width < 640 ? "top-40" : width < 768 ? "top-65.5" : width < 1024 ? "top-78" : "top-88"} left-2`,
    `absolute ${width < 640 ? "top-45" : width < 768 ? "top-74.5" : width < 1024 ? "top-89" : "top-99"} left-2`,
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

      <div className="flex flex-col gap-5 mx-5 2xl:flex-row justify-center">
        <div className="relative w-[350px] sm:w-150 md:w-180 lg:w-200 m-auto 2xl:mx-20 rounded-lg overflow-hidden">
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

        <div className="flex flex-col shrink-1 sm:grid sm:grid-cols-2 gap-2 items-center justify-items-center pb-5 xl:gap-3 m-auto 2xl:mx-20">
          {matches.map((match) => {
            const matchDate = new Date(match.date);
            if (matchDate > startDate && matchDate < endDate) {
              return (
                <div key={match._id}>
                  <Link to={match._id}>
                    <MatchCard
                      match={match}
                      layout="w-75 h-26 lg:w- h-28 xl:w-90 xl:h-30 2xl:w-88 2xl:h-32"
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
