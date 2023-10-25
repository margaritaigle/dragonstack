const { Router } = require("express");

const router = new Router();

router.get("/new", (req, res) => {
  const { locals } = req.app;

  res.json({
    dragon: locals.engine.generation.newDragon(),
  });
});

module.exports = router;
