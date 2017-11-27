import React from 'react';

import TrainDeparturesContainer from './TrainDeparturesContainer';
import WeatherForecastContainer from './WeatherForecastContainer';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <TrainDeparturesContainer/>
        </div>
        <div className="column">
          <WeatherForecastContainer/>
        </div>
      </div>
    );
  }
}
