class Centro {
    constructor(nome, idade, peso, altura){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        
        if (idade < 18)
        {
            this.maior = false
        }
    }

    
    calculoIMC (){
        return (peso/(Math.pow(altura,2)))
    }
}

