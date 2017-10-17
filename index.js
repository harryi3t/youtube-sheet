require('dotenv').config()
var express = require('express');
var googleApi = require('./lib/googleApi');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  googleApi.getToken((err, data) => {
      console.log({err, data})
      data = data || {videos: []};
      return response.render('pages/index', data);
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
