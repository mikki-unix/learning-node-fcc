// module.exports é um objeto. sendo assim, posso atribuir várias propriedades à ele

module.exports.frutas = ["maçã", "banana", "laranja", "caqui"];

const pessoa = {
    nome: "Renato",
    anoNasc: 1990,
    idade: function (ano = 0) {
        return ano < this.anoNasc ? 
            new Date().getFullYear() - this.anoNasc
            : ano - this.anoNasc;
    }
};

module.exports.Renato = pessoa;

console.log(pessoa.idade(1991));
