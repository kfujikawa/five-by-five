import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GoalBoard from './js/components/Goal-board.jsx';

const router = (
  <Router>
    <GoalBoard />
  </Router>
);

ReactDOM.render(router, document.getElementById('app'));
