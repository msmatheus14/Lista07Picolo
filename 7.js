class ItemBiblioteca {
    constructor(){
        if(this.constructor === ItemBiblioteca){
            throw new TypeError("Classe não instaciável!")
        }

        this.sexo = 'MMM'
    }

    obterinformacaoes(){
        return this.sexo

    }
}


class Livro extends ItemBiblioteca {
    constructor(titulo, autor, anoPublicacao, genero) {
        super();
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
    }

    obterInformacoes(){

        return `${super.obterinformacaoes()}`, this.titulo, this.autor, this.anoPublicacao, this.genero
    }
}



class DVD extends ItemBiblioteca {
    constructor(titulo, diretor, anoPublicacao, duracao) {
        super();
        this.titulo = titulo;
        this.diretor = diretor;
        this.anoPublicacao = anoPublicacao;
        this.duracao = duracao;
    }

    obterInformacoes() {
        return `${this.titulo} - ${super.obterinformacaoes()}  ,${this.diretor} (${this.anoPublicacao}), ${this.duracao}, minutos`;
    }
}

const dvd1 = new DVD("AAA", "XXX", 2003, 143);
console.log(dvd1.obterInformacoes()); 
