module.exports.test = "A";

const modB = require("./03_modB");
console.log("modA  : " , modB.test);

module.exports.test = "AA";