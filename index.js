var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index', {
    videos: [
      {
        "url": "https://www.youtube.com/embed/I_ypN8iKuwk",
        "image": "https://img.youtube.com/vi/I_ypN8iKuwk/0.jpg",
        "title": "BIGG BOSS BIGGEST FIGHTS ROAST"
      },
      {
        "url": "https://www.youtube.com/embed/ruHMqQJ6PNE",
        "image": "https://img.youtube.com/vi/ruHMqQJ6PNE/0.jpg",
        "title": "Truth or Dare, Husband vs. Wife feat. Permanent Roommates"
      },
      {
        "url": "https://www.youtube.com/embed/yJD1Iwy5lUY",
        "image": "https://img.youtube.com/vi/yJD1Iwy5lUY/0.jpg",
        "title": "If Google Was A Guy (Part 3)"
      }
    ]
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
