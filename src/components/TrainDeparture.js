import React from 'react';

export default class TrainDeparture extends React.Component {
  render (){
    return (
      <tr className="train">
        <td>
          <span>{this.props.train.departure_time}</span>
          {this.props.train.delay &&
            <span className="tag is-danger">{this.props.train.delay}</span>
          }
        </td>
        <td>{this.props.train.end_station}</td>
        <td>{this.props.train.platform}</td>
      </tr>
    );
  }
};
