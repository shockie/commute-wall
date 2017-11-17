import React from 'react';
import TrainDeparture from './TrainDeparture'; 
import TrainDeparturesFetcher from './fetchers/TrainDeparturesFetcher';

export default class TrainDeparturesContainer extends React.Component {
  state = {
    trains: []
  };

  componentDidMount() {
    TrainDeparturesFetcher()
    .then(trains => {
      this.setState({trains});
    });
  }

  render() {
    console.log(this.state.trains);
    return (
      <div>
        <h1>Train Departures coming in</h1>
        {this.state.trains.map((train,i) => 
          <TrainDeparture key={i} train={train}/>
        )}
      </div>
    );
  }
}
