//REACT
import ReactDOM from "react-dom/client";
import React from "react";
//STYLES
import "../src/assets/styles/style.scss";
//ROUTING
import { BrowserRouter, HashRouter } from "react-router-dom";

//APP
import App from "./App";

const container = document.getElementById("root") as HTMLDivElement;

const root = ReactDOM.createRoot(container);

root.render(
    <HashRouter>
      <App />
    </HashRouter>
);
