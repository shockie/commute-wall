import React from 'react';
import ReactDOM from 'react-dom';
import TrainDeparturesContainer from './TrainDeparturesContainer';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(TrainDeparturesContainer),
    document.getElementById('train_departures')
  );
});
