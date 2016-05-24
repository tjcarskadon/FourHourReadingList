var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var readerSchema = new mongoose.Schema ({
  title: {type: String, index: {unique: true}},
  author: String,
  recs: Number,
  recby: String,
  url: String
})

module.exports = mongoose.model('Reader', readerSchema);