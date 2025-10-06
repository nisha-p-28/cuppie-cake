// Main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Admin from "./Admin.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Admin routes including login, dashboard, etc. */}
        <Route path="/admin/*" element={<Admin />} />

        {/* All other routes */}
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);