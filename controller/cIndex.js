const OAuth = require('oauth');
require('dotenv').config();
const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.ConsumerKey,
    process.env.ConsumerSecret,
    '1.0A',
    null,
    'HMAC-SHA1'
);

let twitterTimeline = function (req,res) {
    oauth.get(
        `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${req.params.txtTimeline}`,
        process.env.AccessToken, //test user token
        process.env.AccessTokenSecret, //test user secret
        function (e, data){
            if (e) console.error(e);
            let twitterdata = JSON.parse(data).map( d=> {
                return d.text
            });
            res.send(twitterdata)
        })
};

let twitterSearch = function (req,res) {
    oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.txtSearch}`,
        process.env.AccessToken, //test user token
        process.env.AccessTokenSecret, //test user secret
        function (e, data){
            if (e) console.error(e);
            let dataTampilan = [];
            let pasrsingJson = JSON.parse(data).statuses;
            pasrsingJson.forEach(d => {
                dataTampilan.push(d.text);
            });
            res.send(dataTampilan.join(`\n`));
        });
};

let twitterPost = function (req,res) {
    oauth.post(
        `https://api.twitter.com/1.1/statuses/update.json?status=${req.params.txtStatus}`,
        process.env.AccessToken, //test user token
        process.env.AccessTokenSecret, //test user secret
        req.params.txtStatus,
        "txt",
        function (e, data){
            if (e) {
                console.error(e);
            }
            res.send(data);
        });
};

module.exports = {
    twitterTimeline,
    twitterSearch,
    twitterPost
}