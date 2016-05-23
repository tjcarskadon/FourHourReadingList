var express = require('express');
var rp = require('request-promise');
var cheerio = require('cheerio');
var path = require('path');
var fs = require('fs');
app = express();

app.get('/', (req, res) => {
//serves the static html page as a placeholder
 res.sendFile('mvp/client/index.html', {root: __dirname.substring(0,  __dirname.indexOf('mvp/'))});
});

app.get('/scrapeList', (req, res) => {

//target URL for the list of podcasts to parse
  var url = 'http://fourhourworkweek.com/podcast/';

  rp(url)
  .then( html => {
    var tUrl, subject, guest;
    //cache html cheerio style
    var $ = cheerio.load(html);

    // console.log($, '$$$$$$$$$$$$$$$$');

    var json = {url: '', name: '', subject: '' };

    $('.podcast').filter(function() {
      var data = $(this); 
      // console.log('#####',data);
      tUrl = data.text();
      console.log('######', tUrl);
    }); 


    //write the succesfully received text to a file
    fs.writeFile('output.txt', JSON.stringify(html, null, 4), err => {
      if (!err) {
        //terminal log for success
        console.log('wrote it, check it.');
        //notify client of succes
        res.send('file received and written - go check');
      } else {
        //terminal log for error
        console.log('error writing file: ');
        //notify client of error
        res.send('something went wrong');
      }
    });
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