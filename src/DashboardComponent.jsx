// import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

function DashboardComponent() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
}

export default DashboardComponent;
