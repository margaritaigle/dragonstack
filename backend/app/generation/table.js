const pool = require("../../databasePool.js");

class GenerationTable {
  // static method can be called as GenerationTable.storeGeneration and cannot be called in a new instance
  // const genTable = new GenerationTable().storeGeneration doesn't work
  static storeGeneration(generation) {
    pool.query(
      "INSERT INTO generation(expiration) VALUES($1)",
      [generation.expiration],
      (error, response) => {
        if (error) return console.error(error);
      }
    );
  }
}

module.exports = GenerationTable;
