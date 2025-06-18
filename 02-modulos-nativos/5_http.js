const http = require("http");

const server = http.createServer((req, res) => {
  // req/res = objtos callback
  // console.log(req); // objeto gigantesco!
  // para aparecer no console tem que haver uma requisição primeiro (acessar o site)

  console.log(req.url);
  // url -> endereço passado no navegador

  if (req.url === "/") {
    res.end("Boas vindas a pagina inicial!");
  } else if (req.url === "/sobre") {
    res.end("Eu sou a Mikki!!");
  } else {
    // se não encontrar uma página existente...
    res.end(`
      <h1>Erro 404</h1>
      <p>Nao foi possivel encontrar a pagina que gostaria.</p>
      <p><a href="/">Clique aqui para voltar para a pagina inicial</a></p>  
    `);
  }
});

server.listen(5000); // a porta para ouvir

// quando rodar esse módulo, o node não vai parar de executar
