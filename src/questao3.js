const produtosJSON = `{
  "produtos": [
    {"nome": "Mouse", "preco": 25.90},
    {"nome": "Teclado", "preco": 89.90},
    {"nome": "Monitor", "preco": 450.00},
    {"nome": "Cabo USB", "preco": 15.00}
  ]
}`;
function obterProdutosAcimaDe50(jsonString) {
  const dados = JSON.parse(jsonString);
  const produtosAcimaDe50 = dados.produtos.filter(produto => produto.preco > 50);
  return produtosAcimaDe50.map(produto => produto.nome);
}
const nomesProdutosAcimaDe50 = obterProdutosAcimaDe50(produtosJSON);
console.log(nomesProdutosAcimaDe50);

