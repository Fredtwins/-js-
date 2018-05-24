module.exports.test = "B";

const modA = require("./03_modA");
console.log("modB : " , modA.test);

module.exports.test = "BB";