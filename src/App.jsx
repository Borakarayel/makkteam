import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Apps/Footer";
import Main from "./Apps/Main";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
    <Footer />
  </React.StrictMode>
);
