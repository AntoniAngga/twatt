var express = require('express');
var router = express.Router();
const cIndex = require('../controller/cIndex');

/* GET home page. */
router.get('/timeline/:txtTimeline', cIndex.twitterTimeline);
router.get('/search/:txtSearch', cIndex.twitterSearch);




module.exports = router;
