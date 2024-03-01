import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import { ROUTE_CONSTANTS } from "@shared/config/routes";

// Pages
import { HomePage } from "./Home";
import { HoldingPage } from "./Holding";
import { ResourcesPage } from "./Resources";
import { ContactsPage } from "./Contacts";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/index.html" element={<Navigate to="/home" />} />
        <Route path="/index.shtml" element={<Navigate to="/home" />} />
        <Route path={ROUTE_CONSTANTS.HOLDING} element={<HoldingPage />} />
        <Route path={ROUTE_CONSTANTS.RESOURCES} element={<ResourcesPage />} />
        <Route path={ROUTE_CONSTANTS.CONTACTS} element={<ContactsPage />} />
      </Routes>
    </Router>
  );
};
