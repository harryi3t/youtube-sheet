require('dotenv').config();

var express = require('express'),
    async = require('async'),
    _ = require('lodash'),
    GoogleSpreadsheet = require('google-spreadsheet'),

    spreadsheetId = '1GRL0ztqPSLk8ClW1octpB0HSKKp3RVJITm0q3Lw2QYc',
    credentials = {
        private_key: JSON.parse(`"${process.env.PRIVATE_KEY}"`),
        client_email: JSON.parse(`"${process.env.CLIENT_EMAIL}"`)
    },
    spreadsheet = new GoogleSpreadsheet(spreadsheetId),
    app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

spreadsheet.useServiceAccountAuth(credentials, _.noop);

app.get('/', function (request, response) {
    var data = {
        videos: []
    };

    spreadsheet.getRows(1, {}, (err, rows) => {
        if (err) {
            console.log('error', err);
            return response.render('pages/index', data);
        }

        data.videos = rows.map(row => {
            var match = row.url.match(/(watch\?v=|embed\/)(.*)/),
                videoId = match && match[2];

            return {
                url: `https://www.youtube.com/embed/${videoId}`,
                image: `https://img.youtube.com/vi/${videoId}/0.jpg`,
                title: row.title
            }
        });
        return response.render('pages/index', data);
    });
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});