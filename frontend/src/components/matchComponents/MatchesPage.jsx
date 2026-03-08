import GroupStageTab from "./GroupStageTab";
import RoundOf16 from "./RoundOf16";
import RoundOf4 from "./RoundOf4";
import SemiFinas from "./SemiFinals";
import Final from "./Final";
import MatchesNav from "./MatchesNav";
import MatchDetails from "./MatchDetails";
import { Routes, Route } from "react-router-dom";

function MatchesPage() {
  return (
    <div className="bg-gradient-to-br from-slate-800 via-green-500 to-gray-800 min-h-screen">
      <MatchesNav />
      <Routes>
        <Route path="/group-stage">
          <Route index element={<GroupStageTab />} />
          <Route path=":id" element={<MatchDetails />} />
        </Route>
        <Route path="/round-of-16" element={<RoundOf16 />} />
        <Route path="/round-of-8" element={<RoundOf4 />} />
        <Route path="/semi-finals" element={<SemiFinas />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </div>
  );
}

export default MatchesPage;
