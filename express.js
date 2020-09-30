var express = require('express');
var app = express();

app.get('/ping', function(req, res) {
    res.send({ping:'hello this is server and I am alive!'});
});

app.get('/ping/:id', function(req, res) {
    res.send({ping:'Hello world'});
});

app.listen(3010);
console.log('Listening on port 3000...');