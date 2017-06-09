/* Import SQLite3 */
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("../datas/us-census.db");

/* Retrieve Rows from Database */
const retrieve_rows = () => {
    let res = [];
    db.serialize(function () {
        db.each("PRAGMA table_info(census_learn_sql)", function (err, row) {
            res.append(row.name);
        });
    });
    db.close();
    return res;
};

/* Retrieve Rows from Database */
const retrieve_values = (variable) => {
    let res = [];
    db.serialize(function () {
        db.each(`SELECT ${variable} FROM census_learn_sql GROUP BY ${variable} LIMIT 10`, function(err, row) {
         res.append(row);
         });
    });
    db.close();
    return res;
};

module.exports = {retrieve_rows, retrieve_values};