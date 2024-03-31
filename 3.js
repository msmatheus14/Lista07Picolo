class Animal {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    obterInformacao (){
        return `Nome: ${this.nome}\nIdade: ${this.idade}`
    }
}

class Mamifero extends Animal{
    constructor(nome, idade, pelo){
        super(nome, idade)
        this.pelo = pelo
    }

    som(){
        return "au au au"
    }
}

class Ave extends Animal {
    constructor (nome, idade, bico){

        super(nome, idade)
        this.bico = bico
    }

    voa(){
        return true
    }
}

let cachorro = new Mamifero("D je", 10,'liso')

console.log(cachorro)


