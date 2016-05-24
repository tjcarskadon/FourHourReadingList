var rp = require('request-promise');
var cheerio = require('cheerio');
var path = require('path');
var fs = require('fs');
var mongoose = require('mongoose');
var mw = require('./mapWorker.js');
// var Q = require('q');

// var addLink = Q.nbind(pm.create, pm);


var url = 'http://fourhourworkweek.com/podcast/';

// http://fourhourworkweek.com/2016/05/04/mike-rowe/

var fetchToFlat = (req, res) => {

  rp(url)
  .then( html => {
    var tUrl, subject, guest, episode;
    var urls = [];
    //cache html cheerio style
    var $ = cheerio.load(html);
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
}

var fetchToDb = (req, res) => {
  rp(url)
  .then( html => {
    var tUrl, subject, guest, episode;
    var urls = [];
    //cache html cheerio style
    var $ = cheerio.load(html);
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

      mw.create(json, (err, data) => {
        if(err) {
          console.log('DB ERROR: ', err);
        }
      });
      // pm.create(json)
      // .then((data) => console.log("succss", data))
      // .catch((err) => console.log("error: ", err));
      

    });

    res.send('check the db');
  })
  .catch( err => {
    //terminal log for error
    console.log("error reading file: ", err);
   });
}

exports.fetchToFlat = fetchToFlat;
exports.fetchToDb = fetchToDb;