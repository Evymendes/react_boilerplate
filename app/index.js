// Libs
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Components
import Wololo from './pages/wololo/wololo';

render((
  <Router history={browserHistory}>
    <Route path='/' component={Wololo} />
  </Router>
), document.getElementById('root'));
