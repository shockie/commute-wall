import React from 'react';

export default class TrainDeparture extends React.Component {
  render (){
    return (
      <div className="train">
        <h3>{this.props.train.end_station}</h3>
        <p>{this.props.train.track}</p>
        <p>{this.props.train.departure_time}</p>
        <p>{this.props.train.platform}</p>
      </div>
    );
  }
};
