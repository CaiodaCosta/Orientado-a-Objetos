import Admin from "./Admin.js";
import Docente from "./Docente.js";
import User from "./User.js";

const novoUser = new User('Mariana', 'm@m', '2021')
console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('rodrigo', 'r@r', '2021')
console.log(novoAdmin.nome)
novoAdmin.nome = 'André'
console.log(novoAdmin.nome)