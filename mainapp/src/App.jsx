import React from "react";
import ReactDOM from "react-dom";
import CardTable from "./components/CardTable";
import FirebaseMessaging from "./config/initFirebase.js";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <FirebaseMessaging />
    <CardTable />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
