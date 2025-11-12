const jsonString = `{
  "usuarios": [
    {"nome": "Carlos", "email": "carlos@email.com"},
    {"nome": "Maria", "email": "maria@email.com"},
    {"nome": "João", "email": "joao@email.com"}
  ]
}`;
const dados = JSON.parse(jsonString);
const emails = dados.usuarios.map(u => u.email);
const emailsUnidos = emails.join(", ");
console.log(emailsConcatenados);
