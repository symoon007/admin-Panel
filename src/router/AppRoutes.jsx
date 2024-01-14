import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Content,
  Analytics,
  Customization,
} from "../containers/routerlinks";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/content" element={<Content />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/customization" element={<Customization />} />
    </Routes>
  );
};

export default AppRoutes;
