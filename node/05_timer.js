//最后才到setImmediate
setImmediate(() => {
  console.log("setImmediate");
});

//然后到setTimeout 2
setTimeout(() => {
  console.log('setTimeout');
},0);

//这个执行起来是最快的速度 1
process.nextTick(() => {
  console.log('nextTick');
});

//虽然setImmediate写在最前面，但是process.nextTick执行起来比它快