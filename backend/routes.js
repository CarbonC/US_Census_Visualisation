/* Import datas */
const {retrieve_rows, retrieve_values} = require("./database_bridge");

const routes = (router) => {
    router.get("/variables", function *(next) {
        this.body = retrieve_rows();
    });
    router.get("/", function *(next) {
        this.body = "Kikoo";
    });
};

module.exports = routes;