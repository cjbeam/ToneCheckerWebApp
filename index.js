var path = require('path');
var express = require('express');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function(req, res){
	res.render('index.ejs');
});
app.get('/data', function(req, res){
	res.render('data.ejs');
});
app.get('/about', function(req, res){
	res.render('about.ejs');
});
app.listen(3000, function(){
	console.log('Listening on port 3000');
})