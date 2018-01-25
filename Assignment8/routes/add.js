var express = require('express');
var router = express.Router();
var db = require('../controller/dbController');

/* GET Add page. */
router.get('/', function(req, res, next) {
  res.render('add', { title: 'Mongo CRUD - ADD', message:'' });
});

/* POST Add page. */
router.post('/', function(req, res, next) {
    var locationname = req.body.locationname;
    var category = req.body.category;
    var latitude = parseFloat(req.body.latitude);
    var longitude = parseFloat(req.body.longitude);
    var coord = [longitude,latitude];
  db.locationdata.insert({name:locationname, category:category,coord:coord}, function(err){
    if(err) throw err;
});
 res.render('add', { title: 'Mongo CRUD - ADD', message: 'Data has been inserted.' });
});
module.exports = router;