var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ParseSchema = new mongoose.Schema ({
  url: String,
  status: Boolean
})

var parseModel = mongoose.model('Parse', ParseSchema);

// exports.con = con;
exports.parseModel = parseModel;
  