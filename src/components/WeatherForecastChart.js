import React from 'react';
import {Line} from 'react-chartjs-2';

export default class WeatherForecastChart extends React.Component {
  graphConfig() {
    let labels = this.props.timepoints.map(point => {
      return point.time;
    });

    let data = this.props.timepoints.map(point => {
      return point.amount_rain;
    });

    return {
      labels: labels,
      datasets: [
        {
          label: 'Amount of Rain',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: data
        }
      ]
    }
  }

  graphOptions(){
    return {
      scales: {
        yAxes : [{
          ticks : {
            suggestedMax : 1.0,
            suggestedMin : 0.0
          }
        }]
      }
    };
  }

  render() {
    return (<Line data={this.graphConfig()} options={this.graphOptions()}/>);
  }
}
