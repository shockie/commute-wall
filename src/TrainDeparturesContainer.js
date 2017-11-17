import React from 'react';
import config from './config';
import Base64 from 'base-64';
import TrainDeparture from './TrainDeparture'; 

export default class TrainDeparturesContainer extends React.Component {
  state = {
    trains: []
  };

  componentDidMount() {
    this.fetchDepartureTimes();
  }

  fetchDepartureTimes() {
    const auth = Base64.encode(`${config.ns.auth.username}:${config.ns.auth.password}`);

    const url = `http://localhost:3000/ns-proxy/ns-api-avt?station=${config.ns.station}`;

    fetch(url, {
      headers: {
        'Authorization': `Basic ${auth}`,
      }, 
      mode: 'cors',
      credentials: 'include'
    })
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(this.parseDepartureTimes)
    .then(trains => this.setState({trains}));
  }

  parseDepartureTimes(xml_data){
    const trains = [];
    xml_data.querySelectorAll('VertrekkendeTrein').forEach((train) => {
      trains.push({
        departure_time: train.querySelector('VertrekTijd').textContent,
        end_station: train.querySelector('EindBestemming').textContent,
        track: train.querySelector('RouteTekst') ? train.querySelector('RouteTekst').textContent : '',
        train_type: train.querySelector('TreinSoort').textContent,
        platform: train.querySelector('VertrekSpoor').textContent
      });
    });
    return trains;
  }

  render() {
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
