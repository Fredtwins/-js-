const { normalize } = require('path');
//等同于
//const normalize = require('path').normalize;

console.log(normalize('/user//login/add'));
console.log(normalize('/user/../add'));