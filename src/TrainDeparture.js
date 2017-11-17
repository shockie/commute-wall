import React from 'react';

export default class TrainDeparture extends React.Component {
  render (){
    return (
      <tr className="train">
        <td>{this.props.train.departure_time}</td>
        <td>{this.props.train.end_station}</td>
        <td>{this.props.train.platform}</td>
      </tr>
    );
  }
};
