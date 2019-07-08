var app = require('express')();
var foo = require('./routes/foo');
const path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/views/foo.html'));
});

let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});