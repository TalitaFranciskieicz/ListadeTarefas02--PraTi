const prompt = require('prompt-sync')();

function memoize(fn){
    const resultados = {}

    return function(... args){
        const chave = JSON.stringify(args)

        if(Object.keys(resultados).includes(chave)){
            console.log("Resultado da memória")
            return resultados[chave]
        }
        const resultadoAtual = fn(...args)
        resultados[chave] = resultadoAtual
        console.log("Novo resultado memorizado!")
        return resultados[chave]
    }
}

function soma(a, b){
    return a + b
}

const somaMemorizada = memoize(soma)

console.log(somaMemorizada(2, 4))
console.log(somaMemorizada(2, 4))