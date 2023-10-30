const { Router } = require("express");

const router = new Router();

//* http://localhost:3000/generation
router.get("/", (req, res) => {
  const { locals } = req.app;

  res.json({
    generation: locals.engine.generation,
  });
});

module.exports = router;
