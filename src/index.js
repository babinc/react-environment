import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore, history } from './app/configureStore';
import Root from './app/Root';

const store = configureStore();

render(
  <Provider store={store} >
    <Root history={history} />
  </Provider>,
  document.getElementById('root')
)
