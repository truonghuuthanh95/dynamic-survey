import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import SGDIndex from "../pages/sgd/index";
import Login from "../pages/auth/login";
import Direction from "../routers/direction";
import SGDCreateReport from "../pages/sgd/createReport";
import SchoolIndex from "../pages/school/index";
import SchoolReport from "../pages/school/report";

const hist = createBrowserHistory();

const AppRouter = () => {
  return (
    <>
      <Router history={hist}>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/loginsso/">
            <Direction />
          </Route>
          <Route path="/sgd/index" exact>
            <SGDIndex />
          </Route>
          <Route path="/sgd/createreport">
            <SGDCreateReport />
          </Route>
          <Route path="/school/index">
            <SchoolIndex />
          </Route>
          <Route path="/school/report">
            <SchoolReport />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
