const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const proxy = require('express-http-proxy');
const app = express();
 
const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/dist'));
 
app.use('/ns-proxy', proxy('https://webservices.ns.nl', {
  https: true,
  filter: (req, res) => {
     return req.method == 'GET';
  }
}));

app.use('/buienradar-proxy', proxy('https://br-gpsgadget-new.azurewebsites.net', {
  https: true,
  filter: (req, res) => {
      return req.method == 'GET';
  }
}));

const server = app.listen(4000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
