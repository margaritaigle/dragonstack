const { Pool } = require("pg");
const databaseConfiguration = require("./secrets/databaseConfiguration.js");

const pool = new Pool(databaseConfiguration);

module.exports = pool;

// pool.query("SELECT * FROM generation", (error, response) => {
//   if (error) return console.log("error", error);

//   return console.log("response.rows", response.rows);
// });
