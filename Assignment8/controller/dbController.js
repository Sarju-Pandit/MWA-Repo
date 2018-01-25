var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/locations",{native_parser:true});
db.bind('locationdata');

module.exports = db;