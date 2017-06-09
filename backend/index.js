/* Import Koa */
const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")();

/* Import routes */
const routes = require("./routes");


/* Create Koa Routes */
routes(router);

app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000);
