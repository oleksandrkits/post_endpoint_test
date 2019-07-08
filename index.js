var app = require('express')();
require('oauthio-web');
var bodyParser = require('body-parser');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/apple', function (req, res, next) {
    OAuth.setOAuthdURL('https://oauth.local');
    OAuth.initialize('uEHxIGEAYjjanMik9TFionlSN8w');
    OAuth.popup('apple').then(apple => {
        console.log(apple);
    });
});

let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});