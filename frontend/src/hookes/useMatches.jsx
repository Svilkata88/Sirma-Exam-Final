import { useState, useEffect, createContext, useContext } from "react";

const MatchesContext = createContext(null);

export const MatchesProvider = ({ children }) => {
  const [allMatches, setAllMatches] = useState([]);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://f-tournament-backend-739415981315.europe-west3.run.app/api/v1/`,
    )
      .then((res) => res.json())
      .then((data) => {
        setAllMatches(data.matches || []);
        setMatches(data.matches || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <MatchesContext.Provider
      value={[
        allMatches,
        setAllMatches,
        matches,
        setMatches,
        loading,
        setLoading,
      ]}
    >
      {children}
    </MatchesContext.Provider>
  );
};

export const useMatchContext = () => {
  return useContext(MatchesContext);
};
