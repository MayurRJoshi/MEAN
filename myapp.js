/* Configure Application */

var express = require('express');
var jade = require('jade');
var routes = require('./routes/myroutes');

var app = express();

app.set('views' , __dirname + '/views');
app.set('view engine' , jade);

app.use(express.static(__dirname + '/public'));

app.use('/' , routes);

app.listen(3000 , function(){
	console.log('Listening');
})