import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CountApp from "./components/CountApp";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <CountApp />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
