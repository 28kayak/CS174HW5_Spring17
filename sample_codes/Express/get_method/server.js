/**
 * Created by kaya on 5/3/2017.
 */
var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function (req,res) {
    //__dirname = difrectory name of current module
    res.sendFile(__dirname + "/" + "index.html");
});
app.get('/process_get', function (req, res) {
    //prepare output in JSON format at
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("example app listening at http:??%s:%s", host, port);
})
