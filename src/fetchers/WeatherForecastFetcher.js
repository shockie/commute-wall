import config from '../config';

const fetcher = () => {
  return fetch(`https://br-gpsgadget-new.azurewebsites.net/data/raintext/?lat=${config.buienradar.location.lat}&lon=${config.buienradar.location.lng}`)
         .then(response => response.text());
}

const parser = (text) => {
  return new Promise((resolve, reject) => {
    debugger;
    let timepoints = text.split('\n');

    for(let point in timepoints) {
      point = point.split('|');
      timepoints.push({amount_rain: point[0], time:point[1]});
    }
    
    resolve(timepoints);
  });
}

export default function(){
  return fetcher()
         .then(parser); 
}
