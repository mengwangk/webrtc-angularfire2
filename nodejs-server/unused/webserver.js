var https = require('https');
var fs = require('fs');

var pkey = fs.readFileSync('key.pem');
var pcert = fs.readFileSync('cert.pem')

var options = {
    key: pkey,
    cert: pcert
};

var server = https.createServer(options, function(req, res) {
    res.writeHead(200);
    res.end("hello world\n");
}).listen(443);