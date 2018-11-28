import React from 'react';
import { Route, Redirect } from "react-router-dom";
import {fakeAuth} from './util';

export default ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: `${process.env.PUBLIC_URL}/login`,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};