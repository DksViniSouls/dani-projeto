const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8090;

//aqui abrir conexao com banco

const server = http.createServer((req, res) => {

    console.log(req.url)

    if (req.url.startsWith('/css') || req.url.startsWith('/styles') || req.url.startsWith('/imagem') || req.url.startsWith('/js') || req.url.endsWith('/html'))
        fs.readFile(__dirname + req.url).then(contents => res.end(contents))

    else if (req.url == "/dani") {
        db.all('SELECT * FROM artigo').then(artigos => {
            res.end(artigos)
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            console.log(artigos)
        })
        // fs.readFile("index.js").then(contents => res.end(contents))
    } else
        fs.readFile(__dirname + "index.html")
            .then(contents => {
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.end(contents);
            })
            .catch(err => {
                res.writeHead(500);
                res.end(err);
                return;
            });
});
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
