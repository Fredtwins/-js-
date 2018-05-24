//如果不想被别的文件看到就不要输出
console.log('This is a module');

var testVar = 100;

function test() {
  console.log(testVar)
}

module.exports.testVar = testVar;

module.exports.testFn = test;

