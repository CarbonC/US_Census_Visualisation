/* Import SQLite3 */
const sqlite3 = require('sqlite3').verbose();

/* Create the database. The database remains always open */
const db = new sqlite3.Database('../datas/us-census.db');

/* Retrieve Rows from Database */
const retrieve_rows = new Promise((resolve, reject) => {
  let res = [];
  db.serialize(() => {
    db.each(
      'PRAGMA table_info(census_learn_sql)',
      (err, row) => {
        res.push(row.name);
      },
      () => {
        resolve(res);
      }
    );
  });
});

/* Retrieve values from Database */
const retrieve_values = variable =>
  new Promise((resolve, reject) => {
    let res = [];
    db.serialize(() => {
      db.each(
        `SELECT ${variable}, AVG(age) as age, COUNT(*) as count FROM census_learn_sql GROUP BY ${variable} LIMIT 100`,
        (err, row) => {
          res.push(row);
        },
        () => {
          db.get(
            `SELECT COUNT(DISTINCT ${variable}) as number FROM census_learn_sql`,
            (err, number) => resolve({ res: res, number: number.number })
          );
        }
      );
    });
  });

module.exports = { retrieve_rows, retrieve_values };
