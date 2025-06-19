const prompt = require('prompt-sync')();

function palavrasUnicas(frase) {
    const listaDePalavras = frase.split(" ");
    const palavrasUnicas = [];

    for (let palavra of listaDePalavras) {
        if (!palavrasUnicas.includes(palavra)) {
            palavrasUnicas.push(palavra);
        }
    }

    return palavrasUnicas;
}

console.log(palavrasUnicas("olá olá mundo mundo")); 