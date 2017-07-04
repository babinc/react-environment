import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
  </Switch>
);
