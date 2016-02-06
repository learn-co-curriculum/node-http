var http = require('http')

var server = http.createServer(function(request, response) {
  console.log('URL: ', request.url)
  console.log('METHOD: ', request.method)
  var users = ['56b64e2c765eb2fdb6238f7b', '56b64e2e765eb2fdb6238f7c', '56b64e2f765eb2fdb6238f7d']
  response.end('Your request to ' + request.url + ':' + JSON.stringify(users))
})

server.listen(3000)
