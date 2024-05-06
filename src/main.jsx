import { createRoot } from "react-dom/client";
import DashboardComponent from "./DashboardComponent";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <DashboardComponent />
  </BrowserRouter>
);
