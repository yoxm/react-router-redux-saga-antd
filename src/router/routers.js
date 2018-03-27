import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Home } from '../components/index';
import LoginPage from '../containers/LoginPage';
export default history => {
  const routes = (
    <Router history={history}>
      <div>
        <Switch>
          <Route exec path="/login" component={LoginPage} />
          <Route exec path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
  return routes;
};
