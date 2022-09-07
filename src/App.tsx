import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, LocationPage, DetailPage } from "./pages";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<LocationPage />} />
        <Route path="/sale/:saleId" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};
