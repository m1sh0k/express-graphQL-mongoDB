var mongoose = require('mongoose');
var config = require('../../config');
//console.log('mongooseClientConOpt: ',config.get('mongoose:options'),' ,url: ',config.get('mongoose:url'));
mongoose.connect(config.get('mongoose:url'), config.get('mongoose:options'));

module.exports = mongoose;

// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
//
// const url = 'mongodb://localhost:27017/graphqldb';
//
// mongoose.connect(url, { useNewUrlParser: true });
// mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));