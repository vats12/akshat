var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'app/components/about')));
app.use(express.static(path.join(__dirname, 'app/components/contact')));
app.use(express.static(path.join(__dirname, 'app/components/home')));

app.use('/',function(req,res){
res.sendFile('index.html');
});
app.listen(4000,()=>{ console.log('app listening to port 4000'); });