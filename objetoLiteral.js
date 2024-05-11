const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana",
    email: "cu@cu.com",
    role: "admin",
    criarCurso() {
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, user) // O primeiro parametro é o objeto que vai herdar
// as propriedades e o segundo parametro vai doar as propriedades

admin.criarCurso();
admin.exibirInfos();
