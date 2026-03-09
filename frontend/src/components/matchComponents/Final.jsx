import { useEffect, useState } from "react";
import MatchCard from "./matchCard";
import { Link } from "react-router-dom";
import Spinner from "../others/Spinner";
import { findTheWinner } from "../../../utils";

function Final() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const startDate = new Date("2024-07-10");
  const endDate = new Date("2024-08-14");

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://f-tournament-backend-739415981315.europe-west3.run.app/api/v1/`,
    )
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.matches || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <h1 className="text-2xl font-bold text-center mb-4 pt-4 text-green-300">
        Final
      </h1>
      <h2 className="border-t border-gray-300 p-4 mx-5 text-green-200"></h2>

      <div className="pb-10 mx-auto w-fit">
        {matches.map((match) => {
          const matchDate = new Date(match.date);
          const [homeScore, awayScore] = findTheWinner(match.Score);

          if (matchDate > startDate && matchDate < endDate) {
            return (
              <div
                className="flex flex-col items-center gap-10"
                key={match._id}
              >
                <Link to={match._id} className="">
                  <MatchCard match={match} />
                </Link>
                <section className="flex gap-3 text-zinc-100 text-2xl items-center font-bold">
                  2024 European Football Champion is{" "}
                  <span className="text-5xl">
                    {homeScore > awayScore
                      ? match.ATeam.Name
                      : match.BTeam.Name}
                  </span>
                  <img
                    className="w-12 h-12 object-cover m-auto"
                    src={`flags/${match.ATeam.Name.toLowerCase()}.png`}
                    alt={match.ATeam.Name.toLowerCase()}
                  />
                </section>
                <section className="w-80 h-auto rounded-lg overflow-hidden shadow-[0px_0px_15px_7px_#000000]">
                  <img src="/cup.jpg" alt="cup" />
                </section>
              </div>
            );
          }

          return null;
        })}
      </div>
    </>
  );
}

export default Final;
