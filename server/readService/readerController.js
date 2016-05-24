var rp = require('request-promise');
var cheerio = require('cheerio');
var path = require('path');
var fs = require('fs');
var mongoose = require('mongoose');
var mw = require('../mapService/mapWorker.js');
var rm = require('./readerModel.js');


//This controller will need to read from the links table
//check the url's against the readingList table
//if the item doesn't exist in the readingList it should parse it
//then it will return the information to the view for display.

//add a test URL for to parse for now
var url = 'http://fourhourworkweek.com/2016/05/04/mike-rowe/'

var parsePage = (req, res) => {
  var results = [];
  var json = {title: '', author: '', recs: '', recby:'', url: ''};
  var link, title, author;
  rp(url)
  .then(function(html) {

    var $ = cheerio.load(html);

    $('a[href^="http://www.amazon.com"]').filter(function() {
      var data = $(this);
      json.url = data.attr('href');
      json.title = data.text();
      json.author = data.parent().text().split('by ').pop();
      
      if (json.author !== 'Podcast' && json.author !== 'Books' && json.author !== 'TV Show' && json.title !==' Books') {
        console.log(json);
        results.push(json);
      }

    });

    res.send('parsed');
  })
  .catch(function(err) {
    console.log(err);
  });
};

exports.parsePage = parsePage;
