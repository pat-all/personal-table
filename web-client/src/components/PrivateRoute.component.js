import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import AuthContext from "../context/Auth.context";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuth } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
