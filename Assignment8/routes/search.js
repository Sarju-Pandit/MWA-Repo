var express = require('express');
var router = express.Router();
var db = require('../controller/dbController');


/* GET search page. */
router.get('/', function(req, res, next) {
  res.render('search', { title: 'Mongo CRUD - SEARCH', datas: '' });
});

/* POST search page. */
router.post('/', function(req, res, next) {
  var category = req.body.category;
  db.locationdata.find({category:category}).toArray(function(err,items){  
    res.render('search', { title: 'Mongo CRUD - SEARCH', datas: items});

});

// var categor = req.body.category;
// var long_locn = req.body.longi;
// var lati_locn = req.body.lati;



//   db.locationdata.find({$and:[{category:categor}, {coord:{$near:[-91.96900219999999,41.0165844]}} ]}).toArray(function(err,items){  
    
//     console.log(long_locn);
//     console.log(lati_locn);
//     console.dir(items);

// });

 });


module.exports = router;