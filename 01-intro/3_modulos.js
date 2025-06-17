// todos os arquivos no node são módulos (padrão CommonJS)

// sempre usar ./ no require
const nomes = require('./4_nomes')
const cumprimentar = require('./5_cumprimentar');

cumprimentar(nomes.mikki); 