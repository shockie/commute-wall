import React from 'react';
import WeatherForecastFetcher from '../fetchers/WeatherForecastFetcher';
import WeatherForecastChart from './WeatherForecastChart';
import WeatherForecastRadar from './WeatherForecastRadar';
import config from '../config';

export default class WeatherForecastContainer extends React.Component {
  state = { timepoints: [] };
  componentDidMount() {
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.fetchWeatherForecast();
    }, 1000 * 60 * 2);
    this.fetchWeatherForecast();
  }

  fetchWeatherForecast() {
    WeatherForecastFetcher()
    .then(timepoints => this.setState({timepoints}));
  }

  render() {
    return (
      <div>
        <h2 className="title">Rain forecast</h2>
        <WeatherForecastRadar lat={config.buienradar.location.lat} lng={config.buienradar.location.lng}/>
        <WeatherForecastChart timepoints={this.state.timepoints}/>
      </div>
    );
  }
}
