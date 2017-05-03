/**
 * Created by kaya on 4/24/2017.
 */
var express = require('express');
app = express();



app.get('/', function(req, res){
    res.sendFile(__dirname + '/twitterRest.html');
});
app.listen(process.env.PORT || 8080);
console.log("http://localhost:8080")