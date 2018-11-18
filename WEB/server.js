const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, 'app')));
// app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(express.static(path.join(__dirname, './')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './', 'index2.html'));
});
app.listen(4000, function() {
    console.log('localhost:4000');
});