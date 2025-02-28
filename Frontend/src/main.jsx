import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/NavBar/Navbar.jsx";
import Admin from "./admin.jsx";
import Orderes from "./components/Orderrd/Orderes.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/table/*"
        element={
          <>
            <Navbar />
            <App />
          </>
        }
      />
      <Route path="/ordered/*" element={<Orderes />} />
      <Route
        path="/admin"
        element={
          <>
            <Admin />
          </>
        }
      />
    </Routes>
  </BrowserRouter>
);
