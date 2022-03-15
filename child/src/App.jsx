import React from "react";
import ReactDOM from "react-dom";
import CardTable from "mainapp/CardTable";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
   <CardTable />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
