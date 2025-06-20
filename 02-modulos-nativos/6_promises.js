// essa estrutura resume uma declaração de Promise
const { readFile, writeFile } = require("fs").promises;

const executar = async () => {
  const primeiroTxt = await readFile("./conteudo/primeiro.txt", "utf-8");
  const segundoTxt = await readFile("./conteudo/sub/segundo.txt", "utf-8");

  await writeFile("./conteudo/resultado_promises1.txt", 
    `Bah, que massa!\n${primeiroTxt + "\n" + segundoTxt}`
  );

  console.log("Tarefas concluídas");
}

executar();