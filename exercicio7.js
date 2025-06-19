let produtos = [
    {nome: "Caderno", preco: 25.00},
    {nome: "Farda", preco: 75.00},
    {nome: "Livro", preco: 35.00}
]

produtos = produtos.sort((a, b) => {
    return a.preco - b.preco
})

produtos = produtos.map((value) => {
    return value.nome
})

console.log(produtos)