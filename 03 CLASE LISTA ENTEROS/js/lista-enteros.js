class ListaEnteros {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
        }
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }

    ordenar() {
        this.lista.sort((a, b) => a - b); // Orden ascendente
    }
}

const listaEnteros = new ListaEnteros();
listaEnteros.agregar(21);
listaEnteros.agregar(12);
listaEnteros.agregar(15);
listaEnteros.agregar(30);
console.log(listaEnteros.lista); //Imprime: [21, 12, 15, 30]

var a = listaEnteros.lista[0];
console.log(a);

var b = listaEnteros.lista[1];
console.log(b);

var c = listaEnteros.lista[2];
console.log(c);

var d = listaEnteros.lista[3];
console.log(d);

// // Retornar el elemento menor de la lista, dado que la lista solo almacena valores positivos

// var datoMenor = -1;

// var a = listaEnteros.lista[0];
// if(a > datoMenor){
//     datoMenor = a;
// }
// console.log("Dato Menor: " + datoMenor);

// var b = listaEnteros.lista[1];
// if(a > b){
//     datoMenor = b;
// }
// console.log("Dato Menor: " + datoMenor);

// var c = listaEnteros.lista[2];
// if(b > c){
//     datoMenor = c
// }
// console.log("Dato Menor: " + datoMenor);

// var d = listaEnteros.lista[3];
// if(c > d){
//     datoMenor = d
// }
// console.log("Dato Menor: " + datoMenor);

var datoMenor = listaEnteros.lista[0];
for(var i = 1; i < listaEnteros.lista.length; i++) {
    if(listaEnteros.lista[i] < datoMenor){
        datoMenor = listaEnteros.lista[i]  
    }
}
console.log("Dato Menor: " + datoMenor);

var lista = listaEnteros.lista;  // Guardamos la referencia de la lista
var datoMayor = lista[0];  // Inicializamos con el primer valor

for(var i = 1, len = lista.length; i < len; i++) {  // Usamos una variable para longitud
    var valorActual = lista[i];  // Guardamos el valor actual
    if(valorActual > datoMayor) {
        datoMayor = valorActual;  // Actualizamos datoMayor si encontramos uno mayor
    }
}
console.log("Dato Mayor: " + datoMayor);






function actualizarResultado() {
    document.getElementById('result').innerHTML = `Resultado: [ ${miLista.lista.join(', ')} ]`;
}

function agregar() {
    const valor = parseInt(document.getElementById('inputValor').value);
    if (!isNaN(valor)) {
        miLista.agregar(valor);
        actualizarResultado();
        document.getElementById('inputValor').value = ''; // Limpiar input
    }
}

function eliminar() {
    const valor = parseInt(document.getElementById('inputValor').value);
    if (!isNaN(valor)) {
        miLista.eliminar(valor);
        actualizarResultado();
        document.getElementById('inputValor').value = ''; // Limpiar input
    }
}

function buscar() {
    const valor = parseInt(document.getElementById('inputValor').value);
    if (!isNaN(valor)) {
        const index = miLista.buscar(valor);
        alert(index !== -1 ? `El número ${valor} está en la posición ${index}` : `${valor} no se encuentra en la lista.`);
    }
}

function ordenar() {
    miLista.ordenar();
    actualizarResultado();
}

