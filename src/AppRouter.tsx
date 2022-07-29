import { HashRouter, Route, Routes } from "react-router-dom";
import { DataAnalystPage } from "./pages/DataAnalyst";
import { DataScientistPage } from "./pages/DataScientist";
import { DeveloperPage } from "./pages/Developer";
import { HomePage } from "./pages/Home";

export function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="developer" element={<DeveloperPage />} />
        <Route path="data-scientist" element={<DataScientistPage />} />
        <Route path="data-analyst" element={<DataAnalystPage />} />
      </Routes>
    </HashRouter>
  );
}
