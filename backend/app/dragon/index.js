const TRAITS = require("../../data/traits.json");

const DEFAULT_PROPERTIES = {
  nickname: "unnamed",
  generationId: undefined,
  dragonId: undefined,
  // Can't have parameters the getter in objects created this way
  get birthdate() {
    return new Date();
  },
  get randomTraits() {
    const traits = [];

    TRAITS.forEach((TRAIT) => {
      const traitType = TRAIT.type;
      const traitValues = TRAIT.values;

      const traitValue =
        traitValues[Math.floor(Math.random() * traitValues.length)];

      traits.push({ traitType, traitValue });
    });

    return traits;
  },
};
class Dragon {
  constructor({ dragonId, birthdate, nickname, traits, generationId } = {}) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
    this.dragonId = dragonId || DEFAULT_PROPERTIES.dragonId;
  }
}

module.exports = Dragon;

// get --> binds an object property to a function that is called when the property is looked up
// set --> binds an object property to a function that is called when there is an attempt to set that property
