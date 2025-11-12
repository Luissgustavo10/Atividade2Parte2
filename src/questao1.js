const usuario = { 
  nome: "Ana Silva", 
  idade: 30,
  habilidades: ["JavaScript", "React", "Node.js"], 
  ativo: true 
}; 
const jsonString = JSON.stringify(usuario); 
const usuarioRecuperado = JSON.parse(jsonString); 
