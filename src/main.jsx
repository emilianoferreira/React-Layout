import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
import Navvar from "./Nav.jsx";
import CardList from "./Card.jsx";
// import CardImage from "./Card.jsx"
import Jumbotron from "./Jumbotron.jsx"
import Footer from "./Footer.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Navvar />
    <div className="container">
      <Jumbotron />
      <CardList />
    </div>
    <Footer />
  </StrictMode>
);
