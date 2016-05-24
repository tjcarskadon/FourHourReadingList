var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/readingList');
// var con = mongoose.connection;
// con.on('error', console.error.bind(console, 'connection error:'));
// con.once('open', function() {
//   console.log('Connected to readingList mongoDB');
// });

var Schema = mongoose.Schema;

var toParseSchema = new Schema ({
  url: String,
  status: Boolean
})

  var parseModel = mongoose.model('Parse', toParseSchema);

// exports.con = con;
exports.parseModel = parseModel;
  