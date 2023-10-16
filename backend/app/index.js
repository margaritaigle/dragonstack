const express = require('express');
const GenerationEngine = require('./engine.js');
// const Generation = require('./generation.js');
// const Dragon = require("./dragon.js");


// * 3. Generation Engine

const app = express();
const engine = new GenerationEngine();

engine.start();

app.get('/dragon/new', (req, res) => {
    res.json({
        dragon: engine.generation.newDragon()
    })
});

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