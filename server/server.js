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
    fs.writeFile('output.txt', JSON.stringify(html, null, 4), err => {
      if (!err) {
        console.log('wrote it, check it.');
        res.send('file received and written - go check');
      } else {
        console.log('error writing file: ');
        res.send('something went wrong');
      }
    });
  })
  .catch( err => {
    console.log("error reading file: ");
    var errObj = {
      name: err.name,
      code: err.statusCode
    }
    fs.writeFile('errorLog.txt', JSON.stringify(errObj, null, 4), err => {
      console.log('error writing to erroLog');
      res.send('catch err')
    });
  });

});


app.listen('8081');
console.log('making magic on 8081'); 

exports = module.exports = app;