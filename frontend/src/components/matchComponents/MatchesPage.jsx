import GroupStageTab from "./GroupStageTab";
import MatchesNav from "./MatchesNav";
import { Routes, Route } from "react-router-dom";

function MatchesPage() {
  return (
    <div className="bg-gradient-to-br from-slate-800 via-green-500 to-gray-800 min-h-screen">
      <MatchesNav />
      <Routes>
        <Route path="/group-stage" element={<GroupStageTab />} />
      </Routes>
    </div>
  );
}

export default MatchesPage;
