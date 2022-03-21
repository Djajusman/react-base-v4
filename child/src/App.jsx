import React from "react";
import ReactDOM from "react-dom";


import "./index.scss";
import Home from "./pages/home/Home";

const App = () => (
  <div>
    <Home />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
