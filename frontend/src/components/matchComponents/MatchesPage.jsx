import GroupStageTab from "./GroupStageTab";
import RoundOf16 from "./RoundOf16";
import RoundOf4 from "./RoundOf4";
import SemiFinas from "./SemiFinals";
import Final from "./Final";
import MatchesNav from "./MatchesNav";
import MatchDetails from "./MatchDetails";
import { Routes, Route } from "react-router-dom";
import Schema from "./Schema";

function MatchesPage() {
  return (
    <div className="bg-gradient-to-br from-slate-800 via-green-500 to-gray-800 min-h-screen">
      <MatchesNav />
      <Routes>
        <Route path="/schema" element={<Schema />} />
        <Route path="/group-stage">
          <Route index element={<GroupStageTab />} />
          <Route path=":id" element={<MatchDetails />} />
        </Route>
        <Route path="/round-of-16">
          <Route index element={<RoundOf16 />} />
          <Route path=":id" element={<MatchDetails />} />
        </Route>
        <Route path="/round-of-8">
          <Route index element={<RoundOf4 />} />
          <Route path=":id" element={<MatchDetails />} />
        </Route>
        <Route path="/semi-finals">
          <Route index element={<SemiFinas />} />
          <Route path=":id" element={<MatchDetails />} />
        </Route>

        <Route path="/final">
          <Route index element={<Final />} />
          <Route path=":id" element={<MatchDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default MatchesPage;
