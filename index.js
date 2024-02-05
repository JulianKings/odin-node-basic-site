const fs = require('node:fs');
const http = require('http');

const server = http.createServer(function (req, res) {
    if( req.method === 'GET')
    {
        switch(req.url)
        {
            case '/':
                res.writeHead(200, {'Content-Type': 'text/html'});
                fs.readFile('./index.html', 'utf8', (err, data) => {
                    if (err) {
                      console.error(err);
                      return;
                    }
                    res.end(data);
                });
                break;
            case '/about':
                res.writeHead(200, {'Content-Type': 'text/html'});
                fs.readFile('./about.html', 'utf8', (err, data) => {
                    if (err) {
                      console.error(err);
                      return;
                    }
                    res.end(data);
                });
                break;
            case '/contact-me':
                res.writeHead(200, {'Content-Type': 'text/html'});
                fs.readFile('./contact-me.html', 'utf8', (err, data) => {
                    if (err) {
                      console.error(err);
                      return;
                    }
                    res.end(data);
                });
                break;
            default:
                res.writeHead(404, {'Content-Type': 'text/html'});
                fs.readFile('./404.html', 'utf8', (err, data) => {
                    if (err) {
                      console.error(err);
                      return;
                    }
                    res.end(data);
                });
                break;
        }
    } else {
        res.writeHead(405, {'Content-Type': 'text/plain'});
        res.end('Method Not Allowed\n');
    }
});

server.listen(8080);
console.log('Server running');
