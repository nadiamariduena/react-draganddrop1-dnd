import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";

const App = () => "hello world";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
