const os = require('os');

// console.log(os.userInfo());
// console.log(`Sistema rodando há ${os.uptime()} segundos.`)

const descricaoOS = {
    nome: os.type(),
    versao: os.release(),
    memTotal: os.totalmem(),
    memLivre: os.freemem()
};

console.log(descricaoOS);