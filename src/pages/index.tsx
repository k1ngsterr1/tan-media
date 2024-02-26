import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { ROUTE_CONSTANTS } from "@shared/config/routes";

// Pages
import { HomePage } from "./Home";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/index.html" element={<Navigate to="/home" />} />
        <Route path="/index.shtml" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};
