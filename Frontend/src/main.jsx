import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/NavBar/navbar.jsx";
import Footer from "./components/Footer/footer.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <App />
    <Footer/>
  </>
);
