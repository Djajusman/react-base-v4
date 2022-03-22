import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import CardTable from "./components/CardTable";
// import FirebaseMessaging from "./config/initFirebase.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.scss";
import Admin from "./layouts/Admin";
import Home from "social/Home";
import Auth from "./layouts/Auth.js";
// import { Example } from "../example";

function FallbackComponent() {
  return <div>An error has occurred</div>;
}

const myFallback = <FallbackComponent />;

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const App = () => (
  // <div className="mt-10 text-3xl mx-auto max-w-6xl">
  //   <FirebaseMessaging />
  //   <Sentry.ErrorBoundary fallback={myFallback} showDialog>
  //     <CardTable />
  //   </Sentry.ErrorBoundary>
  // </div>
  <>

    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        <Route path="/social" component={Home} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/admin" />
      </Switch>
    </BrowserRouter>,
  </>
);

Sentry.init({
  dsn: "https://533a31780355418cb4373a6b4961dbc8@o1168883.ingest.sentry.io/6261158",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById("app"));
