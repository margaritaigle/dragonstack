const pool = require("../../databasePool.js");

class GenerationTable {
  // static method can be called as GenerationTable.storeGeneration and cannot be called in a new instance
  // const genTable = new GenerationTable().storeGeneration doesn't work
  static storeGeneration(generation) {
    return new Promise((resolve, reject) => {
      pool.query(
        "INSERT INTO generation(expiration) VALUES($1) RETURNING id",
        [generation.expiration],
        (error, response) => {
          if (error) return reject(error);

          const generationId = response.rows[0].id;

          resolve({ generationId });
        }
      );
    });
  }
}

module.exports = GenerationTable;
