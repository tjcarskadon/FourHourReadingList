var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ParseSchema = new mongoose.Schema ({
  url: String,
  status: Boolean
})


var parseModel = mongoose.model('Parse', ParseSchema);

// parseModel.create({url: 'anoter', status: false}, function(err, data) {
//   console.log('success');
// });

// exports.con = con;
module.exports = mongoose.model('Parse', ParseSchema);
  