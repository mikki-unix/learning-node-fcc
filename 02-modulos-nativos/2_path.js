const path = require('path');

console.log(path.sep); // atributo com o separador de diretórios do sistema -> '\' ou '/'

// vai normalizar o caminho que descrevi. usa o separador padrão do sistema e corrige erros
const caminhoArquivo = path.join("../", "/01-intro", "2_globais.js");
console.log(caminhoArquivo);

// absoluto
console.log(path.resolve(caminhoArquivo));