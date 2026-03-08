import { useEffect, useState } from "react";
import MatchCard from "./matchCard";
import { Link } from "react-router-dom";
import Spinner from "../others/Spinner";

function RoundOf16() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const startDate = new Date("2024-06-26");
  const endDate = new Date("2024-07-02");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/v1/")
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
        Round of 16
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

export default RoundOf16;
