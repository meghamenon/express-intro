var express = require('express'); // gets the express library from node_modules
var app = express(); //server call and name is app

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static('public')); // static is constant 

var albums = [
    {
      title: 'Cupid Deluxe',
      artist: 'Blood Orange'
    },
    {
      title: 'M3LL155X - EP',
      artist: 'FKA twigs'
    },
    {
      title: 'Fake History',
      artist: 'letlive.'
    }
  ];

 var taquerias = [
    { name: "La Taqueria" },
    { name: "El Farolito" },
    { name: "Taqueria Cancun" }
  ];

app.get('/', function(request, response){

	console.log('GET /');
	response.sendFile('views/index.html', {root: __dirname});
	console.log(__dirname); 

});

app.listen(3000, function(){
	console.log('listening at 3000');
});

app.get('/api/albums', function(req, res){
	res.send(albums); // you can do response.json if you want to specify it is json. but since... 
	//but since albums is already an object, you can use send. 

});

 app.get('/api/taquerias', function (req, res) {
    res.json(taquerias);
  });

