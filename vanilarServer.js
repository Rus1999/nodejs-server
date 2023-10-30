let http = require('http');
http.createServer((req, res) => {
    res.end('hello');
}).listen(4000);
console.log('server started');