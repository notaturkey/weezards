
const api_routes = require('express').Router();
var path = require('path');

api_routes.get('/test', (req, res) => {
  res.status(200).json({ message: 'test' });
});

api_routes.get('/', (req, res) => {
  res.send('Hello World!')
})

api_routes.get('/home', (err, res) => {
	res.status(200);
  res.sendFile(path.join(__dirname + '/../views/index.html'));
});

api_routes.get('/game/game.js', function (req, res) {
  res.sendFile(path.join(__dirname,'..', 'game', 'game.js'));
});

//api_routes.get('/assets/test/test.png', function (req, res) {
//  res.sendFile(path.join(__dirname,'..', 'assets', 'test', 'test.png'));
//});
//api_routes.get('*', function (req, res) {
//  console.log(req);
//});/
api_routes.get('/assets/:object/:file', function (req, res) {
  res.sendFile(path.join(__dirname,'..', 'assets', req.params.object, req.params.file));
});

module.exports = api_routes;
