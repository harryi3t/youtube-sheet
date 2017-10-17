var google = require('googleapis'),
    googleAuth = require('google-auth-library'),
    service;

googleJWTClient = new google.auth.JWT(
    JSON.parse(`"${process.env.CLIENT_EMAIL}"`),
    null,
    JSON.parse(`"${process.env.PRIVATE_KEY}"`), ['https://www.googleapis.com/auth/spreadsheets'],
    null
),
req = {
    spreadsheetId: '1GRL0ztqPSLk8ClW1octpB0HSKKp3RVJITm0q3Lw2QYc',
    range: 'A1:B100',
    auth: googleJWTClient
},
service;

service = google.sheets('v4');

module.exports.getToken = function (cb) {
service.spreadsheets.values.get(req, (err, response) => {
    if (err) {
        return cb(err);
    }

    var data = response.values.map((array) => {
        var match = array[0].match(/(watch\?v=|embed\/)(.*)/),
            videoId = match && match[2];
        return {
            url: `https://www.youtube.com/embed/${videoId}`,
            image: `https://img.youtube.com/vi/${videoId}/0.jpg`,
            title: array[1]
        };
    });
    return cb(null, {videos: data});
});
};