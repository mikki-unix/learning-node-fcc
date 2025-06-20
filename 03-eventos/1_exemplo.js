/*
  * Event-Driven Programming
  estilo de programação onde o programa muda em resposta aos eventos emitidos.
  exemplo: api DOM no JS, app mudar com o evento click de um botão..
  tbm usado na CLI, e excessivamente em Node.Js
*/

// é padrão usar esse nome. Usa PascalCase pois se trata de uma classe
const EventEmitter = require('events');

const emissor = new EventEmitter();

// on -> ouvir um evento;
emissor.on("resposta", () => {
  console.log("Recebido!");
});

// emit -> executar o evento
// * o nome precisa bater com o do `on`
emissor.emit("resposta");

// * a ordem importa: primeiro ouvir, depois emitir. 
// caso contrário, o evento não vai acontecer.

// usando parâmetros
emissor.on("pessoa", (nome, id) => {
  console.log(`Dados recebidos: ${nome}(${id})`);
});

emissor.emit("pessoa", "Mikki", 4);