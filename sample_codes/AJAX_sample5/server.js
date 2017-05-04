/**
 * Created by kaya on 5/3/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//app.use(express.bodyParser());
app.get('/',function (req,res) {
    res.sendFile(__dirname+"/client.html");

})
app.post('/endpoint', function (req,res) {
    var obj = {};
    console.log('body:' + JSON.stringify(req.body));
    res.send(req.body);

});
app.listen(3000);
