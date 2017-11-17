import React from 'react';
import TrainDeparture from './TrainDeparture'; 
import TrainDeparturesFetcher from './fetchers/TrainDeparturesFetcher';

export default class TrainDeparturesContainer extends React.Component {
  state = {
    trains: []
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.fetchTrainDepartures();
    }, 1000 * 60 * 2);
    this.fetchTrainDepartures();
  }

  fetchTrainDepartures() {
    TrainDeparturesFetcher()
    .then(trains => {
      this.setState({trains});
    });
  }

  render() {
    return (
      <div>
        <h2 className="title">Train Departures</h2>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Time</th>
              <th>Station</th>
              <th>Platform</th>
            </tr>
          </thead>
          <tbody>
          {this.state.trains.map((train,i) => 
            <TrainDeparture key={i} train={train}/>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}
