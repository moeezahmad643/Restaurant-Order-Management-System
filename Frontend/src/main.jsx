import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/NavBar/navbar.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Admin from "./admin.jsx";
import Orderes from "./components/Orderrd/orderes.jsx";



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
      <Route
        path="/ordered/*"
        element={
          <Orderes/>
        }
      />
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
