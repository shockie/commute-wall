import React from 'react'

export default class WeatherForecastRadar extends React.Component {
  render() {
    console.log("Rerendering Radar");
    return <iframe src={`https://gadgets.buienradar.nl/gadget/zoommap/?lat=${this.props.lat}&lng=${this.props.lng}&overname=2&zoom=8&naam=Amsterdam&size=2b&voor=1`} scrolling="no" width="330" height="330" frameBorder="no"></iframe>;
  }
}
