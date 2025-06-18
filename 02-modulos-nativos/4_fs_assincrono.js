// sem 'sync' -> versão assíncrona
const { readFile, writeFile } = require("fs");

readFile("./conteudo/primeiro.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const primeiro = result;
    readFile("./conteudo/sub/segundo.txt", "utf-8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const segundo = result;

        writeFile(
            "./conteudo/resultado-assincrono.txt",
            `Resultados:\n${primeiro}\n${segundo}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        );
    });
});
