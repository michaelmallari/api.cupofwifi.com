var express = require('express');
var router = express.Router();
var mainCtrl = require('../controllers/main-controller');
var venueCtrl = require('../controllers/venue-controller');


/* GET home page. */
router.get('/', mainCtrl.home);
router.get('/venue', venueCtrl.venueInfo);
router.get('/venue/rate/add', venueCtrl.addRating);

module.exports = router;
