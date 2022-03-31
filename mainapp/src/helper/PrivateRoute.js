import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => {
  const isAuthenticated = localStorage.getItem("acces_token");
  //   console.log(rest);
  return (
    <Route
      {...props}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

export default PrivateRoute;