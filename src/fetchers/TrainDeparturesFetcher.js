import Base64 from 'base-64';
import config from '../config';
import moment from 'moment';


const fetcher = () => {
  const auth = Base64.encode(`${config.ns.auth.username}:${config.ns.auth.password}`);
  const url = `/ns-proxy/ns-api-avt?station=${config.ns.base_station}`;

  return fetch(url, {
    headers: {
      'Authorization': `Basic ${auth}`,
    }, 
    mode: 'cors',
    credentials: 'include'
  })
  .then(response => response.text())
  .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"));
}

const parser = (xml_data) => {
  return new Promise((resolve, reject) => {
    let trains = [];
    xml_data.querySelectorAll('VertrekkendeTrein').forEach((train) => {
      trains.push({
        departure_time: moment(train.querySelector('VertrekTijd').textContent).format('HH:mm'),
        end_station: train.querySelector('EindBestemming').textContent,
        track: train.querySelector('RouteTekst') ? train.querySelector('RouteTekst').textContent : '',
        train_type: train.querySelector('TreinSoort').textContent,
        platform: train.querySelector('VertrekSpoor').textContent
      });
    });

    resolve(trains);
  });
}

const filter = (trains) => {
  return new Promise((resolve, reject) => {
    resolve(trains.filter(train => config.ns.stations.includes(train.end_station)));
  });
}

export default function (){
  return fetcher()
         .then(parser)
         .then(filter);
}
