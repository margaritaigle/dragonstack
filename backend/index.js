const Dragon = require("./dragon.js");

const viky = new Dragon({ birthdate: new Date(), nickname: "viky" });
const baloo = new Dragon({ nickname: "baloo", birthdate: new Date() });
const numar = new Dragon();

setTimeout(() => {
    const gooby = new Dragon();
    console.log(gooby)
    
}, [3000])

console.log(viky, baloo, numar)
