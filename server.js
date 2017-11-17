const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const proxy = require('express-http-proxy');
const app = express();
 
const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/dist'));
 
app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  lazy: true,
  stats: {
    colors: true,
  }
}));

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

app.get('/get', (req, res) => {
  console.log(req.headers);
  res.send('Hello World');
});
 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
