import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../constants/routesConctants";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const { isAuth } = useSelector((state) => state.user);

  return (
    <>
      <Switch>
        {isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} exact component={Component} />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} exact component={Component} />
        ))}
        <Redirect to={SHOP_ROUTE} />
      </Switch>
    </>
  );
};

export default AppRouter;
