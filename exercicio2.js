
const prompt = require('prompt-sync')();
function jogoAdivinhacao() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativa = null;
    let tentativas = 0;

    while (tentativa !== numeroAleatorio) {
        let entrada = prompt("Adivinhe o número (1 a 100):");
        tentativa = parseInt(entrada, 10);

        if (isNaN(tentativa)) {
            console.log("Por favor, digite um número válido.");
            continue;
        }

        tentativas++;

        if (tentativa < numeroAleatorio) {
            console.log("Mais alto!");
        } else if (tentativa > numeroAleatorio) {
            console.log("Mais baixo!");
        } else {
            console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
        }
    }
}

jogoAdivinhacao();
