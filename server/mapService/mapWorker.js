var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mapSchema = new mongoose.Schema ({
  url: {type: String, index: {unique: true}},
  status: Boolean
})

module.exports = mongoose.model('Map', mapSchema);
  