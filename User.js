export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome() {
        //logica de condicional
        return this.#nome
    }
    
    get email() {
        //logica de condicional
        return this.#email
    }
    get nascimento() {
        //logica de condicional
        return this.#nascimento
    }
    get role() {
        //logica de condicional
        return this.#role
    }
    get ativo() {
        //logica de condicional
        return this.#ativo
    }
    set nome(novoNome){ //metodo set deve ter uma propriedade
        this.#nome = novoNome
    }
    
    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.nascimento}`
    }
}

