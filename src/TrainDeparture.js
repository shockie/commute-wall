import React from 'react';

export default class TrainDeparture extends React.Component {
  render (){
    return (
      <div className="train">
        <h3>{this.props.train.end_station}</h3>
      </div>
    );
  }
};
