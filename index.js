const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

(async () => {

    const db = await sqlite.open({
      filename: '../sqlite/banco2.db',
      driver: sqlite3.Database
    })
    const artigos = await db.all('SELECT * FROM artigo');
    console.log(artigos);

})()