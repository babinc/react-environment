import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './App';

export default function Root({history}) {
  return (
    <div>
      <ConnectedRouter history={history}>
        <Route path="/" component={App}/>
      </ConnectedRouter>
    </div>
  );
}

Root.propTypes = {
  history: PropTypes.object.isRequired
};
