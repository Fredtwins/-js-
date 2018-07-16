const { join } = require('path');

//join顾名思义就是拼接的意思
console.log(join('/user', 'login' , 'add/'));
console.log(join('/user', '../login', 'add/'));