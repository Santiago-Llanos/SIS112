class Entero {
    //Atributos
    Num;

    //Constructor = inicializa el objeto
    constructor(Numero){
        this.Num = Numero;  
    }

    //CLASS- Cargar el valor de Num
    setNum(){
        const input = document.getElementById('numeroInput')
        this.Num = parseInt(input.value, 10)
    }


    //CLASS- Obtener el valor del numero 
    getNum() {
        return this.Num;    
    }

    //CLASS- Mostra el vaalor del numero
    showNum() {
        const resultadoDiv = document.getElementById('resultado')
        resultadoDiv.textContent = this.getNum();
    }

    showResultado(respuesta) {
        const resultadoDiv = document.getElementById('resultado')
        resultadoDiv.textContent = respuesta;
    }

    incrementarNum(){
        this.Num = this.Num + 1;
    }

    decrementarNum(){
        this.Num = this.Num - 1;
    }
 
    // Estos dos son lo mismo solo que resumido
    // esParImpar(){
    //     if (this.Num % 2 !== 0){
    //         return true;
    //     }else{
    //         return false
    //     }
    // }
    esParImpar(){
        return (this.Num % 2 == 0)
    }

    esPosiNega(){
        return (this.Num >= 0)
    }
}
// Las funciones = button HTML
var ClaseEntero = new Entero(0); //Se inicializo en 0

//crear el objeto 
function cargarNum() {
    ClaseEntero.setNum();
}

//mostrar el valor de num en html
function mostrarNum(){
    ClaseEntero.showNum();
}

function incrementarValor(){
    ClaseEntero.incrementarNum();
    ClaseEntero.showNum();
}

function decrementarValor(){
    ClaseEntero.decrementarNum();
    ClaseEntero.showNum();
}

function esParImparNum(){
    var respuesta = ClaseEntero.esParImpar();
    var resp = respuesta ? "Es Num Par":"Es Num Impar";
    ClaseEntero.showResultado(resp)
}

function esPosiNegaNum(){
    var respuesta = ClaseEntero.esPosiNega();
    var resp = respuesta ? "Es Num Positivo":"Es Num Negativo";
    ClaseEntero.showResultado(resp)
}
