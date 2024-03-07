// criação da classe funcionário
class Funcionario {
    constructor(nome, idade, salarioBase){
        // declaração dos atributos nome, idade e salárioBase
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }
    // cria um método calcular salário
    calcularSalario(){
       /*calcularSalario é um método que se diferencia para diferentes tipos de funcionários e,
        portanto, se encontra vazio para ser sobre escrito por cada classe filho que herda de Funcionario*/  
    }
}

// declara classe professor que herda de funcionário
class Professor extends Funcionario {
    // declara os atributos referentes a classe mãe e os excluvivos (disciplina e horas semanais)

    /*Dentro deste programa, se assume que o salário base de um professor é definido pelo valor 
    que é pago por uma hora de aula, sendo usado como tal posteriormente para o cálculo do salário total*/
    constructor(nome, idade, salarioBase, disciplina, horasSemanais){
        super(nome, idade, salarioBase); // inicia os atributos da classe mãe
        this.disciplina = disciplina;
        this.horasSemanais = horasSemanais; // quantidade de horas semanais do professor
    }

    // criação do método para calcular o salário por cima do método original da classe mãe

    /* Seguindo as especificações da atividade, o mesmo deve ser calculado pela multiplicação das 
    horas semanais do professor (presentes no atributo horasSemanais) e o a relação de hora/aula 
    (presente no atributo salarioBase, como explicado anteriormente).
    Devido a essas condições, estamos de fato calculando o salário semanal do professor, em vez do 
    tradicional salário mensal, sendo um detalhe importante que não deve deixar de ser explicitado*/ 
    calcularSalario(){
        // faz o cálculo do salário do professor em uma variável salarioFinal
        var salarioFinal = this.salarioBase * this.horasSemanais;

        // escreve no console o salário calculado, especificando que se trata do salário semanal
        console.log("O salário semanal do professor de " + this.disciplina + " " + this.nome + " é de R$" + salarioFinal);
    }
}

// cria dois objetos da classe professor
const prof1 = new Professor("Telison Cunha", 43, 60, "matemática", 40);
const prof2 = new Professor("Joaquin Fernadez", 31, 40, "química", 40);

// uso do método calculaSalario para calcular e mostrar o salário total dos professores
prof1.calcularSalario()
prof2.calcularSalario()