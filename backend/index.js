/* Import Koa */
const Koa = require("koa");
const app = new Koa();

/* Import SQLite3 */
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

/* Create Koa Application */
app.use((ctx) => {
    ctx.body = "Hello World";
});

app.listen(3000);
