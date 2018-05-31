//入口
const config = {
  // entry: './main.js'
  //entry单个入口文件
  entry: {
    // main:'./main.js',
    app:'./src/app.js'
  },
  // 输出
  output: {
    filename:'app.js',
    path:'./src/app.js'
  }
};

module.exports = config;


