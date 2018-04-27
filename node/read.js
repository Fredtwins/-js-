var fs = require('fs');


// 读取文件
fs.readFile('./helloword.js', function (err, data) {
  // 如果读取失败则提醒失败
  if (err) {
    console.log('读取失败');
  } else {
    console.log(data.toString());
  }
})