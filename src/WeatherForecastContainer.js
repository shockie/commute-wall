import React from 'react';
import WeatherForecastFetcher from './fetchers/WeatherForecastFetcher';
import WeatherForecastChart from './WeatherForecastChart';

export default class WeatherForecastContainer extends React.Component {
  state = { timepoints: [] };
  componentDidMount() {
    WeatherForecastFetcher()
    .then(timepoints => this.setState({timepoints}));
  }

  render() {
    return (
      <div>
        <h1>Weather Forecast</h1>
        <WeatherForecastChart timepoints={this.state.timepoints}/>
      </div>
    );
  }
}
