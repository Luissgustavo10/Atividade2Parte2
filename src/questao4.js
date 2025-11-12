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
