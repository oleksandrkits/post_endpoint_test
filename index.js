var express = require('express');
var app = express();
var foo = require('./routes/foo');
const path = require('path');

app.use('/scripts', express.static(path.join(__dirname, '/node_modules/oauthio-web/dist/')));
app.use(express.static('public'));

app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/views/foo.html'));
});

let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});