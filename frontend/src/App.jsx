import MatchesPage from "./components/matchComponents/MatchesPage";
import { DateProvider } from "./hookes/useDate";

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-800 via-green-500 to-gray-800">
      <DateProvider>
        <MatchesPage />
      </DateProvider>
    </div>
  );
}

export default App;
