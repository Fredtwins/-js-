
var http = require('http');
var srver = http.createServer();


srver.on('request', function (request, response) {
  console.log('收到客户发送过来');
  response.write('yes or no');
  response.end();
})


srver.listen(3000, function () {
  
  console.log('服务器启动成功');

})