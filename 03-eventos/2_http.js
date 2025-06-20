const { createServer } = require("http");

const server = createServer();

// ouvindo o evento "request" (já incluso na classe Server) 
// referência: https://nodejs.org/api/http.html#event-request
server.on('request', (req, res) => {
  console.log("Requisição recebida.");
  res.end("Boas-vindas!")
});

server.listen(5000);