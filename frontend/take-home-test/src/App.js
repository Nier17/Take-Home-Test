import Sidebar from "./components/Sidebar";
import BoardCommits from "./commit/BoardCommits";
import BoardBranches from "./branches/BoardBranches";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/commits" element={<BoardCommits />} />
          <Route path="/branches" element={<BoardBranches />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
