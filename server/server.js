var express = require('express');
var mongoose = require('mongoose');
var db = require('../db/config.js')
var rp = require('request-promise');
var cheerio = require('cheerio');
var path = require('path');
var fs = require('fs');
app = express();

mongoose.connect('mongodb://localhost/shortly');

//route to index

app.get('/', (req, res) => {
//serves the static html page as a placeholder
 res.sendFile('mvp/client/index.html', {root: __dirname.substring(0,  __dirname.indexOf('mvp/'))});
});

//scrape the list of podcasts and store in the database
app.get('/scrapeList', (req, res) => {

//target URL for the list of podcasts to parse
  var url = 'http://fourhourworkweek.com/podcast/';

  rp(url)
  .then( html => {
    var tUrl, subject, guest, episode;
    var urls = [];
    //cache html cheerio style
    var $ = cheerio.load(html);

    // console.log($, '$$$$$$$$$$$$$$$$');

    var json = {url:'', status:false };

    $('.podcast a').filter(function() {
      var data = $(this); 
      //get url and store in JSON object
      urls.push(data.attr('href'));
      // json.url = tUrl;
    }); 
    //write the succesfully received text to a file
    urls.forEach(url => {
      json.url = url;
      json.status = true
      
      fs.appendFile('output.txt', JSON.stringify(json, null, 4), err => {
        if (!err) {
          //terminal log for success
          console.log('wrote it, check it.');
        } else {
          //terminal log for error
          console.log('error writing file: ');
        }
      });

    });

    res.send('check the file');
  })
  .catch( err => {
    //terminal log for error
    console.log("error reading file: ");
    //error handling object
    var errObj = {
      name: err.name,
      code: err.statusCode
    }
    //write errors to log
    fs.writeFile('errorLog.txt', JSON.stringify(err, null, 4), err => {
      if (err) {
        console.log('error writing to erroLog');
      }
      //notify client of error
      res.send('catch err')
    });
  });

});


app.listen('8081');
console.log('making magic on 8081'); 

exports = module.exports = app;