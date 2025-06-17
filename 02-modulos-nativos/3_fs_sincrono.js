// '..sync' -> versões síncronas desses métodos
const { readFileSync, writeFileSync } = require("fs");

// caminho do arquivo e seu "encoder"
const primeiro = readFileSync("./conteudo/primeiro.txt", "utf8");
const segundo = readFileSync("./conteudo/sub/segundo.txt", "utf8");

console.log(primeiro + "\n" + segundo);

const data = `Dia de hoje: ${new Date()}`;
writeFileSync("./conteudo/resultado.txt", data); // ou escreve, ou substituí

// `{flag 'a'}` significa "append" -> adicionar no final. não apaga todo o resto
writeFileSync("./conteudo/resultado.txt", "\nOlá, Mundo!", {flag: 'a'});