const express = require('express');
const app = express();
const port = 3000;
var path = require('path');
const routes = require('./api/api_routes');

app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (err, res) => {
	res.status(200);
  console.log(__dirname);
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
