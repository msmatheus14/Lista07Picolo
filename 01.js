class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    obterInformacao(){
        return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}`
    }

    anoUso(){
        return (2024 - this.ano)
    }
}

let BMW = new Carro('BMW', "X6", 2021)

console.log(BMW.obterInformacao())