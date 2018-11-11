function Contato (id, nome, email, telefone) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
}
var contatos = [
    contato1 = new Contato(1, "João", "joao@gmail.com", "88993215678"),
    contato2 = new Contato(2, "Maria", "maria@gmail.com", "88991237856"),
    contato3 = new Contato(3, "José", "jose@gmail.com", "88985227739")
]

module.exports = contatos;