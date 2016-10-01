var express = require('express'),
    app = express(),
    path = require('path');

app.use(express.static(__dirname + '/app'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
console.log('application is running on 8080');
