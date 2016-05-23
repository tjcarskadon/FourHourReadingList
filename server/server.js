var express = require('express');
var rp = require('request-promise');
var cheerio = require('cheerio');
var path = require('path');
app = express();

app.get('/', (req, res) => {

  // console.log('this is making the request');
  console.log(__dirname.substring(0,  __dirname.indexOf('mvp/')) + 'mvp/client/index.html');
  res.sendFile('mvp/client/index.html', {root: __dirname.substring(0,  __dirname.indexOf('mvp/'))});
});

app.listen('8081');
console.log('making magic on 8081'); 

exports = module.exports = app;