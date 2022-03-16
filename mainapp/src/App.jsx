import React from "react";
import ReactDOM from "react-dom";
import CardTable from "./components/CardTable";
import FirebaseMessaging from "./config/initFirebase.js";
import { StoreProvider, useStore } from "store/store";

import "./index.scss";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const App = () => {
  const { count, increment } = useStore();
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
       <div>Test Redux</div>
      <div>Count: {count}</div>
      <div>
        <button
          onClick={increment}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Add To Cart
        </button>
      </div>
      <FirebaseMessaging />
      <CardTable />
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
