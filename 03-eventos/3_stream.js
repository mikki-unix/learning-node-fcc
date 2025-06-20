// stream serve para modularizar tarefas grandes de manipulação de texto
// exemplo: invés de ler um arquivo grande todo de uma vez, ler por partes

const { createReadStream, writeFileSync } = require("fs");

/*for (let i = 1; i <= 10_000; i++) {
  const espacamento = i < 10_000 ? "\n" : "" 
  writeFileSync("./arquivo_grande.txt", `Linha ${i + espacamento}`, { flag: "a"});
}*/

const caminhoArquivo = "./conteudo/arquivo_grande.txt"

// tamanho padrão dos "pedaços": 64kB
const stream = createReadStream(caminhoArquivo);
stream.on("data", (pedaco) => {
  console.log(`Lendo ${pedaco.length / 1000} kB de dados!`);
});

// highWaterMark -> definir tamanho (em bytes); 
// encoding -> usar para conseguir ler os textos do buffer

/*
const streamMaiorEncode = createReadStream(caminhoArquivo, {highWaterMark: 30000, encoding: "utf-8"});
streamMaiorEncode.on("data", (pedaco) => {
  console.log(`Pedaço de ${pedaco.length} caracteres`);
  console.log("----------------------");
  console.log(pedaco);
  console.log("\n");
  
});
*/