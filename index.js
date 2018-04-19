const http = require('http');


const port = 8081;

http
  .createServer(function (request, response) {
    console.log(request.url);
    response.end('Hello, Etherisc!');
  })
  .listen(port, function (err) {
    if (!err) {
      console.log('Server is listening on ' + port);
    } else {
      console.log(err);
    }
  });
