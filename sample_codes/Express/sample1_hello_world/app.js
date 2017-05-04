/**
 * Created by kaya on 5/3/2017.
 */
var express = require('express');
//create an Express "app"
var app = express();
//accept requests on '/' (the root path on the URL -- localhost:3000/) and pass it to function
app.get('/', function (request, response){
    //the processing function or 'callback' receives the request and is expected to present with a response
    response.send("yes!!!"); // <-- send string as response
})
app.listen(3000);