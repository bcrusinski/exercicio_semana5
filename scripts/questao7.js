class Animal{
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    }

    descrever(){
        console.log("O animal selecionado se chama " + this.nome + " e possui " + this.idade + " anos.")
    }
}

const animal1 = new Animal("cachorro", 12);
const animal2 = new Animal("gato", 5);

animal1.descrever();
animal2.descrever();