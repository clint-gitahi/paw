import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Base from './components/base';
import CatProfile from './components/catProfile.js';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={routeProps => <Base {...routeProps} />} />
      <Route
        exact
        path="/moreinfo/:id"
        render={routeProps => <CatProfile {...routeProps} />}
      />
    </Switch>
  );
};

export default App;
