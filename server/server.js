var express = require('express');
var rp = require('request-promise');
var cheerio = require('cheerio');
app = express();

app.get('/' (req, res) => {
  console.log('console test')
  res.send('Hello World');
});

app.listen('8081');
console.log('making magic on 8081'); 

exports = module.exports = app;