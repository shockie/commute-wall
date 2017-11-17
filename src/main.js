import React from 'react';
import ReactDOM from 'react-dom';
import TrainDeparturesContainer from './TrainDeparturesContainer';
import WeatherForecastContainer from './WeatherForecastContainer';

import "./scss/main.scss";

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(TrainDeparturesContainer),
    document.getElementById('train_departures')
  );

  ReactDOM.render(
    React.createElement(WeatherForecastContainer),
    document.getElementById('weatherforecast')
  );
});
