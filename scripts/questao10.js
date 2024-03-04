class Funcionario {
    constructor(nome, idade, salarioBase){
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }
}

class Professor extends Funcionario {
    constructor(nome, idade, salarioBase, disciplina, horasSemanais){
        super(nome, idade, salarioBase);
        this.disciplina = disciplina;
        this.horasSemanais = horasSemanais;
    }

    calcularSalario(){
        var salarioFinal = this.salarioBase * this.horasSemanais;
        console.log("O salário do professor "+ this.nome + " é de R$" + salarioFinal);
    }
}

const prof1 = new Professor("Telison Cunha", 43, 60, "matemática", 40);
const prof2 = new Professor("Joaquin Fernadez", 31, 40, "química", 40);

prof1.calcularSalario()
prof2.calcularSalario()