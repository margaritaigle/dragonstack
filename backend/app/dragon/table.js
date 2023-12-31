const pool = require("../../databasePool.js");
const DragonTraitTable = require("../dragonTrait/table.js");

class DragonTable {
  static storeDragon(dragon) {
    const { birthdate, nickname, generationId } = dragon;
    return new Promise((resolve, reject) => {
      //! Use quotes for keeping the camel case as postgresql lower cases variables and keys by default
      pool.query(
        `INSERT INTO dragon(birthdate, nickname, "generationId") 
        VALUES($1, $2, $3) RETURNING id`,
        [birthdate, nickname, generationId],
        (error, reponse) => {
          if (error) return reject(error);

          const dragonId = reponse.rows[0].id;

          // we ensure that each promise doesnt fail and only after all are resolved we set the dragon id
          Promise.all(
            dragon.traits.map(({ traitType, traitValue }) => {
              return DragonTraitTable.storeDragonTrait({
                dragonId,
                traitType,
                traitValue,
              });
            })
          )
            .then(() => {
              resolve({ dragonId });
            })
            .catch((error) => reject(error));
        }
      );
    });
  }

  static getDragon({ dragonId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT birthdate, nickname, "generationId" FROM dragon WHERE dragon.id = $1',
        [dragonId],
        (error, response) => {
          if (error) reject(error);

          if (response.rows.length === 0) return reject(new Error("no dragon"));

          resolve(response.rows[0]);
        }
      );
    });
  }
}

module.exports = DragonTable;
