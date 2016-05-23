var express = require('express');
var rp = require('request-promise');
var cheerio = require('cheerio');
var path = require('path');
app = express();

app.get('/', (req, res) => {

  // console.log('this is making the request');
  console.log(__dirname.indexOf('/mvp/'));
  console.log('another');
  res.sendFile('index.html', {root: '/../client'});
});

app.listen('8081');
console.log('making magic on 8081'); 

exports = module.exports = app;