var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mapSchema = new mongoose.Schema ({
  url: String,
  status: Boolean
})

module.exports = mongoose.model('Map', mapSchema);
  