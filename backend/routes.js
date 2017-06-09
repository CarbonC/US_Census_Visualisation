/* Import datas */
const {retrieve_rows, retrieve_values} = require("./database_bridge");

const routes = (router) => {

    router.get('/', function (ctx, next) {
        ctx.body = "Yolo";
    });

    router.get("/variables", function (ctx, next) {
        return retrieve_rows.then(
            function (res) {
                ctx.body = res;
            });
    });

    router.get("/values/:variable", function (ctx, next) {
        return retrieve_values(ctx.params.variable).then(
            function (res) {
                ctx.body = res;
            });
    });
};

module.exports = routes;