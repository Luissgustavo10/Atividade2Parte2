const pedidosJSON = `{
  "pedidos": [
    {"id": 1, "cliente": "Fernanda", "total": 120.50, "status": "entregue"},
    {"id": 2, "cliente": "Roberto", "total": 89.90, "status": "processando"},
    {"id": 3, "cliente": "Carla", "total": 45.30, "status": "entregue"}
  ]
}`;
function resumoPedidos(pedidosJSON) {
  const dados = JSON.parse(pedidosJSON); 
  let entregues = 0;
  let processando = 0;
  let valorTotal = 0; 
  dados.pedidos.forEach(pedido => {
    if (pedido.status === "entregue") {
      entregues++;
    } else if (pedido.status === "processando") {
      processando++;
    }
    valorTotal += pedido.total;
  });  
  return `${entregues} pedidos entregues, ${processando} em processamento. Valor total: R$ ${valorTotal.toFixed(2)}`;
}
const resumo = resumoPedidos(pedidosJSON);
console.log(resumo);

