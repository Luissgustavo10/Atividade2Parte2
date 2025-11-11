**# Atividade2Parte2**
****
**questão 1**:

const usuario = {
  nome: "Ana Silva";
  idade: 30;
  habilidades: ["JavaScript", "React", "Node.js"];
  ativo: true
};
const jsonString = JSON.stringify(usuario); // vai converter o objeto para JSON

como ficaria no JSON: {"nome":"Ana Silva","idade":30,"habilidades":["JavaScript","React","Node.js"],"ativo":true}

const usuarioRecuperado = JSON.parse(jsonString); // recupera o objeto em formato de JSON de volta para o formato de JavaScript

ao retornar para JavaScrit, ficaria como no código inicial.
****
**questão 2:**

const jsonString = `{
  "usuarios": [
    {"nome": "Carlos", "email": "carlos@email.com"},
    {"nome": "Maria", "email": "maria@email.com"},
    {"nome": "João", "email": "joao@email.com"}
  ]
}`;

// 1. Converter a string JSON em objeto
const dados = JSON.parse(jsonString);
// 2. Extrair os emails
const emails = dados.usuarios.map(u => u.email);
// 3. Unir em uma única string separada por vírgulas
const emailsUnidos = emails.join(", ");
console.log(emailsConcatenados);
****

**questão 3:**

const produtosJSON = `{
  "produtos": [
    {"nome": "Mouse", "preco": 25.90},
    {"nome": "Teclado", "preco": 89.90},
    {"nome": "Monitor", "preco": 450.00},
    {"nome": "Cabo USB", "preco": 15.00}
  ]
}`;

function obterProdutosAcimaDe50(jsonString) {
  // 1. Converter o JSON para objeto
  const dados = JSON.parse(jsonString);

  // 2. Filtrar produtos com preço acima de R$ 50
  const produtosAcimaDe50 = dados.produtos.filter(produto => produto.preco > 50);
  
  // 3. Extrair e retornar os nomes desses produtos
  return produtosAcimaDe50.map(produto => produto.nome);
}

const nomesProdutosAcimaDe50 = obterProdutosAcimaDe50(produtosJSON);
console.log(nomesProdutosAcimaDe50);
****
**questão 4:**
const endereco = {
  rua: "Av. Paulista",
  numero: 1000,
  cidade: "São Paulo",
  cep: "01310-100"
};
function formatarEndereco(endereco) {
  return `${endereco.rua}, ${endereco.numero} - ${endereco.cidade} - CEP: ${endereco.cep}`;
}
const enderecoFormatado = formatarEndereco(endereco);
console.log(enderecoFormatado);
****
**questão 5:**
const pedidosJSON = `{
  "pedidos": [
    {"id": 1, "cliente": "Fernanda", "total": 120.50, "status": "entregue"},
    {"id": 2, "cliente": "Roberto", "total": 89.90, "status": "processando"},
    {"id": 3, "cliente": "Carla", "total": 45.30, "status": "entregue"}
  ]
}`;
function resumoPedidos(pedidosJSON) {
  const dados = JSON.parse(pedidosJSON); // Converter a string JSON em objeto
  let entregues = 0;
  let processando = 0;
  let valorTotal = 0;   //Inicializar variáveis de contagem e valor total
  dados.pedidos.forEach(pedido => {
    if (pedido.status === "entregue") {
      entregues++;
    } else if (pedido.status === "processando") {
      processando++;
    }
    valorTotal += pedido.total;
  });  // Processar cada pedido
  return `${entregues} pedidos entregues, ${processando} em processamento. Valor total: R$ ${valorTotal.toFixed(2)}`;
} Retornar o resumo formatado
const resumo = resumoPedidos(pedidosJSON);
console.log(resumo);
****
**questão 6:**
function parseJSONSafe(jsonString) {
  try {
    // Tenta converter a string para JSON
    return JSON.parse(jsonString);
  } catch (erro) {
    // Em caso de erro, retorna null ou uma mensagem de erro
    console.error("Erro ao tentar converter para JSON:", erro.message);
    return null;
  }
}
// Teste com JSON inválido
const jsonInvalido = '{nome: "João", "idade": 30}'; // Falta aspas em "nome"
console.log(parseJSONSafe(jsonInvalido)); // Deve retornar null ou mensagem de erro
