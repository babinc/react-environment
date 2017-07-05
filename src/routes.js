import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './about/About';
import HomePage from './home/Home';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
  </Switch>
);
