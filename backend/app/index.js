const express = require("express");
const GenerationEngine = require("./generation/engine");
const dragonRouter = require("./api/dragon.js");
const generationRouter = require("./api/generation.js");
// const Generation = require('./generation.js');
// const Dragon = require("./dragon.js");

// * 3. Generation Engine

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

// When we pass callback that we pass to de .use function is called middleware
app.use("/dragon", dragonRouter);
app.use("/generation", generationRouter);

//! Error handling middleware
// the next parameter sends data to the next middleware function
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: "error",
    message: err.message,
  });
});

engine.start();

module.exports = app;

// * 2. Generation class

// const generation = new Generation;

// console.log('generation', generation);

// const Gooby = generation.newDragon();

// console.log('Gooby', Gooby);

// setTimeout(() => {
//     const mimar = generation.newDragon();
//     console.log('mimar', mimar)
// }, 15000); FAILS

// * 1. Dragon class

// const viky = new Dragon({ birthdate: new Date(), nickname: "viky" });
// const baloo = new Dragon({
//   nickname: "baloo",
//   birthdate: new Date(),
//   traits: [{ traitType: "backgroundColor", traitValue: "blue" }],
// });
// const numar = new Dragon();

// setTimeout(() => {
//   const gooby = new Dragon();
//   console.log(gooby);
// }, [3000]);

// console.log(viky, baloo, numar);
