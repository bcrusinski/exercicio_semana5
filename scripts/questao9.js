class SomadorDeNotas {
    constructor(){
        this.total = 0
    }

    adicionarNota(nota){
        this.total += nota;
        console.log("Nota somada");
    }

    verTotal(){
        console.log("Total da soma das notas: " + this.total)
    }
}

const somador = new SomadorDeNotas();

somador.adicionarNota(10);
somador.adicionarNota(9);
somador.adicionarNota(8);
somador.adicionarNota(7);

somador.verTotal();

