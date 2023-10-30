const { Router } = require("express");
const DragonTable = require("../dragon/table");

const router = new Router();

router.get("/new", (req, res, next) => {
  const { locals } = req.app;
  const dragon = locals.engine.generation.newDragon();

  DragonTable.storeDragon(dragon)
    .then(({ dragonId }) => {
      console.log("dragonId", dragonId);

      dragon.dragonId = dragonId;

      res.json({
        dragon,
      });
    })
    // Passes the error to the error handler middleware
    .catch((error) => next(error));
});

module.exports = router;
