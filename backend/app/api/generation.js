const { Router } = require("express");

const router = new Router();

router.get("/", (req, res) => {
  const { locals } = req.app;

  res.json({
    generation: locals.engine.generation,
  });
});

module.exports = router;
