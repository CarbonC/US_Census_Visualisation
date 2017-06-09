/* Import datas */
const {retrieve_rows, retrieve_values} = require("./database_bridge");

const routes = (router) => {
    router.get('/', function (ctx, next) {
        ctx.body = "Kikoo";
    });
    router.get("/variables", function (ctx, next) {
        ctx.body = retrieve_rows();
    });
};

module.exports = routes;