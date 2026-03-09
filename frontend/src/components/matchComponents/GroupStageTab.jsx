import { useEffect, useState } from "react";
import MatchCard from "./matchCard";
import { Link } from "react-router-dom";
import Spinner from "../others/Spinner";
import { useSearchContext } from "../../hookes/useSearch";
import { useMatchContext } from "../../hookes/useMatches";

function GroupStageTab() {
  const [allMatches, setAllMatches, matches, setMatches, loading] =
    useMatchContext();
  const [query] = useSearchContext();
  const endGroupDate = new Date("2024-06-26");

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
        Group Stage
      </h1>
      <h2 className="border-t border-gray-300 p-4 mx-5 text-green-200">
        Group A
      </h2>

      <div className="group-container">
        {matches.map((match) => {
          const matchDate = new Date(match.date);

          if (matchDate <= endGroupDate && match.ATeam.Group === "A") {
            return (
              <Link to={match._id} key={match._id}>
                <MatchCard match={match} />
              </Link>
            );
          }

          return null;
        })}
      </div>
      <h2 className="border-t border-gray-300 p-4 mx-5 text-green-200">
        Group B
      </h2>
      <div className="group-container">
        {matches.map((match) => {
          const matchDate = new Date(match.date);

          if (matchDate <= endGroupDate && match.ATeam.Group === "B") {
            return (
              <Link to={match._id} key={match._id}>
                <MatchCard match={match} />
              </Link>
            );
          }
          return null;
        })}
      </div>
      <h2 className="border-t border-gray-300 p-4 mx-5 text-green-200">
        Group C
      </h2>
      <div className="group-container">
        {matches.map((match) => {
          const matchDate = new Date(match.date);

          if (matchDate <= endGroupDate && match.ATeam.Group === "C") {
            return (
              <Link to={match._id} key={match._id}>
                <MatchCard match={match} />
              </Link>
            );
          }
          return null;
        })}
      </div>
      <h2 className="border-t border-gray-300 p-4 mx-5 text-green-200">
        Group D
      </h2>
      <div className="group-container">
        {matches.map((match) => {
          const matchDate = new Date(match.date);

          if (matchDate <= endGroupDate && match.ATeam.Group === "D") {
            return (
              <Link to={match._id} key={match._id}>
                <MatchCard match={match} />
              </Link>
            );
          }
          return null;
        })}
      </div>
      <h2 className="border-t border-gray-300 p-4 mx-5 text-green-200">
        Group E
      </h2>
      <div className="group-container">
        {matches.map((match) => {
          const matchDate = new Date(match.date);

          if (matchDate <= endGroupDate && match.ATeam.Group === "E") {
            return (
              <Link to={match._id} key={match._id}>
                <MatchCard match={match} />
              </Link>
            );
          }
          return null;
        })}
      </div>
      <h2 className="border-t border-gray-300 p-4 mx-5 text-green-200">
        Group F
      </h2>
      <div className="group-container">
        {matches.map((match) => {
          const matchDate = new Date(match.date);

          if (matchDate <= endGroupDate && match.ATeam.Group === "F") {
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

export default GroupStageTab;
