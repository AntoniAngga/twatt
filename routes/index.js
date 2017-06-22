const express = require('express');
const router = express.Router();
const cIndex = require('../controller/cIndex');

/* GET home page. */
router.get('/timeline/:txtTimeline', cIndex.twitterTimeline);
router.get('/search/:txtSearch', cIndex.twitterSearch);
router.post('/status/:txtStatus', cIndex.twitterPost);




module.exports = router;
