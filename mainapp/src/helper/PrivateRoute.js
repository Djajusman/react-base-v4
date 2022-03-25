import React from "react";
import { Route, Redirect } from "react-router-dom";
// import BasicReact from "../../pages/basic/React";

const PrivateRoute = ({ component: Component, ...props }) => {
  const isAuthenticated = localStorage.getItem("token");
  //   console.log(rest);
  return (
    <Route
      {...props}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};

export default PrivateRoute;