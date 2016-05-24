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
var checkList = () => {

  mw.find().where({status: false}).then(function(data) {
    data.forEach(function(item){
      parsePage(item);
    });
  });

};

//create function that reads the links db
//checks for status 
  // if status is false
    //parse the page and store in readers table
    //set parse to true

//need to adjust what happenes because this functon will enventually not have the response object.
var parsePage = (obj) => {
  var url = obj.url;
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
        rm.create(json, function(err, data) {
          if(err) {
            console.log('error');
          } else {
            mw.findOneAndUpdate({url: url}, {status: true}, function(err) {
              if(!err) {
                console.log('updated success');
              }
            });
            console.log('success');
          }
        });
      }

    });

    // res.send('check the db');
  })
  .catch(function(err) {
    console.log(err);
  });
};

exports.parsePage = parsePage;
exports.checkList = checkList;
