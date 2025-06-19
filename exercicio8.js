let vendas = [
    {cliente: "Alexia", total: 1000},
    {cliente: "Alexia", total: 600},
    {cliente: "Breno", total: 600},
    {cliente: "Breno", total: 1900}
]

const resultado = vendas.reduce((listaFinal, proximoCliente) => {
    const indexCliente = listaFinal.findIndex((value) => value.cliente === proximoCliente.cliente)

    if (indexCliente === -1){
        listaFinal.push(proximoCliente)
        return listaFinal
    }

    listaFinal[indexCliente].total += proximoCliente.total
    return listaFinal
}, [])

console.log(resultado)