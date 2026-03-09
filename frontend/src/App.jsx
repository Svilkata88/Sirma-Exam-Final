import MatchesPage from "./components/matchComponents/MatchesPage";
import { DateProvider } from "./hookes/useDate";
import { SearchProvider } from "./hookes/useSearch";
import { MatchesProvider } from "./hookes/useMatches";

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-800 via-green-500 to-gray-800">
      <MatchesProvider>
        <DateProvider>
          <SearchProvider>
            <MatchesPage />
          </SearchProvider>
        </DateProvider>
      </MatchesProvider>
    </div>
  );
}

export default App;
