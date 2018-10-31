// Libs
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store';

// Components
import Wololo from './pages/wololo';

let store = configureStore();

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Wololo} />
    </Router>
  </Provider>
), document.getElementById('root'));
