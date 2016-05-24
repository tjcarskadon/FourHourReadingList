var ps = require('../services/parseService.js')

module.exports = (app, express) => {
  app.get('/', (req, res) => {
  //serves the static html page as a placeholder
   res.sendFile('mvp/client/index.html', {root: __dirname.substring(0,  __dirname.indexOf('mvp/'))});
  });

  app.get('/fetchUrl', (req, res) => {
      ps.fetchToFlat(req, res);
    } 
  );

  app.get('/fetchDb', (req, res) => {
      ps.fetchToDb(req, res);
    } 
  );
} 