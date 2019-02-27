var app = require('express')();
var bodyParser = require('body-parser');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/callback', function (req, res, next) {
    console.log(req.body);
    res.json(req.body);
});

let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});