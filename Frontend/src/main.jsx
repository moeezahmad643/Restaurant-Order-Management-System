import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/NavBar/navbar.jsx";
import Footer from "./components/Footer/footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Admin from "./admin.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <App />
            <Footer />
          </>
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
