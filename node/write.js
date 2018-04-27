var fs = require('fs');

// 写文件
fs.writeFile('./helloword.js','现在是第二次修改',(err,data) => {
  if( err ) {
    // 如果是错误的就返回错误信息
    console.log('读取不到，错误');
  } else {
    console.log('成功了');
  }
})