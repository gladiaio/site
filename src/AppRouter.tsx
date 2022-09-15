import { HashRouter, Route, Routes } from "react-router-dom";
import { DataAnalystPage } from "./pages/DataAnalyst";
import { DataScientistPage } from "./pages/DataScientist";
import { DeveloperPage } from "./pages/Developer";
import { HomePage } from "./pages/Home";
import { PrivacyPage } from "./pages/Privacy";
import { CguPage } from "./pages/Cgu";
import { ContactPage } from "./pages/Contact";

export function AppRouter() {
  console.log('cocou')
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="developer" element={<DeveloperPage />} />
        <Route path="data-scientist" element={<DataScientistPage />} />
        <Route path="data-analyst" element={<DataAnalystPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="cgu" element={<CguPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  );
}
