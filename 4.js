class Livro{

    #titulo
    #autor
    #preco

    constructor(titulo, autor, preco){
        this.#titulo = titulo
        this.#autor = autor
        this.#preco = preco
    }

    exibirInformacao(){
        return ` Titulo: ${this.#titulo}\nAutor: ${this.#autor}\nPreco: ${this.#preco}`
    }
}

class Fisico extends Livro {

    #peso

    constructor(titulo, autor, preco, peso){

        super(titulo, autor,preco)
        this.#peso = peso
    }

    Custo(){
        return this.#peso * 1.99
    }
}

class Ebook extends Livro{

    #tamanhoMB

    constructor(titulo, autor, preco, tamanhoMB){
        super(titulo,autor, preco)

        this.#tamanhoMB = tamanhoMB
    }

    getTamanhoMB(){
        return "Tamanho:" + this.#tamanhoMB
    }
}

let amorDaAlma = new Fisico('Amor da Alma', 'Gabriel', 22.55, 4)

let v2 = new Ebook('ss', "gg",55, 455)

console.log(amorDaAlma.exibirInformacao(), v2.getTamanhoMB())