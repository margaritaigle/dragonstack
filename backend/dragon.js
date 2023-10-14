const DEFAULT_PROPERTIES = {
  nickname: "unnamed",
  // Can't have parameters the getter in objects created this way
  get birthdate() {
    return new Date();
  }
}
class Dragon {
  constructor({ birthdate, nickname } = {}) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
  }
}

module.exports = Dragon;

// get --> binds an object property to a function that is called when the property is looked up
// set --> binds an object property to a function that is called when there is an attempt to set that property
