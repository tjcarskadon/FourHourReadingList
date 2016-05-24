var mc = require('../mapService/mapController.js')
var rc = require('../readService/readerController.js')

module.exports = (app, express) => {
  app.get('/', (req, res) => {
  //serves the static html page as a placeholder
   res.sendFile('mvp/client/index.html', {root: __dirname.substring(0,  __dirname.indexOf('mvp/'))});
  });

  app.get('/fetchUrl', (req, res) => {
      mc.fetchToFlat(req, res);
    } 
  );

  app.get('/fetchDb', (req, res) => {
      mc.fetchToDb(req, res);
    } 
  );

   app.get('/fetchReading', (req, res) => {
      rc.parsePage(req, res);
    } 
  );

   app.get('/fetch', (req, res) => {
      rc.checkList();
    } 
  );
} 