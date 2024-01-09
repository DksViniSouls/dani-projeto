
(async () => {
    const jsonBody = require("body/json")
    const http = require("http");
    const fs = require('fs').promises;
    const sqlite = require("sqlite");
    const sqlite3 = require("sqlite3");

    const host = 'localhost';
    const port = 9090;
    const db = await sqlite.open({
        filename: '../sqlite/banco2.db',
        driver: sqlite3.Database
    })

    //aqui abrir conexao com banco

    const server = http.createServer((req, res) => {

        function send(err, body) {
            sendJson(req, res, body)
            jsonBody(req, res, send)
                

        }

        if (req.url.startsWith('/css') || req.url.startsWith('/styles') || req.url.startsWith('/imagem') || req.url.startsWith('/js') || req.url.endsWith('/html'))
            fs.readFile(__dirname + req.url).then(contents => res.end(contents))

        else if (req.url == "/artigos") {
            
            db.all('SELECT * FROM artigo').then(artigos => {
                res.setHeader("Content-Type", "application/json");
                res.writeHead(200);
                res.end(JSON.stringify(artigos))

            })

        } else if (req.url == "/novo-artigo") {

            db.all('INSERT INTO artigo').then(artigos => {
                res.setHeader("Content-Type", "application/json");
                res.writeHead(200);
                res.end(JSON.stringify(artigos))

            })

        } else {
            fs.readFile(__dirname + "/index.html")
                .then(contents => {
                    res.setHeader("Content-Type", "text/html");
                    res.writeHead(200);
                    res.end(contents);
                })
                .catch(err => {
                    res.writeHead(500);
                    res.end(JSON.stringify(err));
                    return;
                });
        }
    });
    server.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
    });
})()