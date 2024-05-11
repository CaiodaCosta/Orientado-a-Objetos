function User (nome, email){
    this.nome = nome
    this.email = email

    this.exibirInfos = function () {
        return  `${this.nome}, ${this.email}`
    }
}

const novoUser = new User('Juliana', 'j@j.com') // forma de criar objeto com o construtor
console.log(novoUser.exibirInfos())

function Admin(role){
    User.call(this, 'Juliana', 'J@J')
    this.role = role || 'estudante'
}


Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('admin')