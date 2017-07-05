import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './about/AboutPage';
import TodoPage from './todo/TodoPage';

export default (
  <Switch>
    <Route exact path="/" component={TodoPage} />
    <Route path="/about" component={AboutPage} />
  </Switch>
);
