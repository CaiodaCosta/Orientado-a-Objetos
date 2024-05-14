import User from "./User.js";

class Docente extends User{
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo) 
     }

     aprovaEstudante(estudante, curso){
        return `estudante ${estudante} aprovado no curso ${curso}`
     }
}

const novoDocente = new Docente ('Caio', 'c@c.com', '2021')
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('Juliana', 'JS'))