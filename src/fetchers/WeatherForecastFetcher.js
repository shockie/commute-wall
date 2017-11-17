import config from '../config';

const fetcher = () => {
  return fetch(`${config.base_uri}/buienradar-proxy/data/raintext/?lat=${config.buienradar.location.lat}&lon=${config.buienradar.location.lng}`)
         .then(response => response.text());
}

const parser = (text) => {
  return new Promise((resolve, reject) => {
    const timepoints = text.split('\r\n');
    const points = [];

    timepoints.forEach((timepoint) => {
      if(timepoint){
        let point = timepoint.split('|');
        let amount = parseInt(point[0], 10);
        let amount_of_rain = Math.pow(10, (amount-109)/32);
        points.push({amount_rain: amount_of_rain, time:point[1]});
      }
    });
    
    resolve(points);
  });
}

export default function(){
  return fetcher()
         .then(parser); 
}
