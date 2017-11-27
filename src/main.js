import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';

import "./scss/main.scss";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(Dashboard),
    document.getElementById('dashboard')
  );
});
