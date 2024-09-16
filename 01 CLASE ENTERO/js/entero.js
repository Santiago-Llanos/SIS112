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

    factorial(){
        if (this.Num < 0) return "No hay factorial de numero negativos";
        let factorial = 1, i = this.Num;
        while (i > 1) factorial *= i--;
        return factorial;
    }

    esPerfecto(){
        let suma = 0;  // Inicializamos una variable para almacenar la suma de divisores

        // Recorremos desde 1 hasta Num-1 para encontrar los divisores
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i === 0) {  // Si i es divisor de Num
                suma += i;  // Añadimos i a la suma
            }
        } 
        // Comprobamos si la suma de los divisores es igual al número
        return suma === this.Num;
    }

    esPrimo(){
        if (this.Num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(this.Num); i++) {
            if (this.Num % i === 0) return false;
        }
        return true;
    }

    Fibonucci(){
        if (this.Num <= 0) return "No hay sucesión de Fibonacci para números menores o iguales a 0";
        
        let fibo = [0, 1];
        while (fibo[fibo.length - 1] + fibo[fibo.length - 2] <= this.Num) {
            fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
        }
        
        return fibo;
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

function factorialNum(){
    var respuesta = ClaseEntero.factorial();
    ClaseEntero.showResultado("Factorial:" + respuesta)
}

function esPerfectoNum(){
    var respuesta = ClaseEntero.esPerfecto();
    var resp = respuesta ? "Es Num perfecto":"No es Num perfecto"
    ClaseEntero.showResultado(resp)
}

function esPrimoNum(){
    var respuesta = ClaseEntero.esPrimo();
    var resp = respuesta ? "Es Num Primo" : "No es Num Primo";
    ClaseEntero.showResultado(resp);
}

function FibonucciNum(){
    var respuesta = ClaseEntero.Fibonucci();
    ClaseEntero.showResultado("Fibonacci: " + respuesta.join(", "));
}

