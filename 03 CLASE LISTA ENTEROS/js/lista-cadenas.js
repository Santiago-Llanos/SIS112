class ListaCadenas {
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
        this.lista.sort(); // Orden ascendente alfabético
    }
}

const miLista = new ListaCadenas();
miLista.agregar('Hola'); //4 -0
miLista.agregar('Mundo');// 5 - 1
miLista.agregar('UCB');// 3 - 2


// Retornar la cadena con mayor caracteres

// var = let
// var a = miLista.lista[0]
// console.log(a);
// var aCant = a.length;
// console.log(aCant);

// var b = miLista.lista[1]
// console.log(b);
// var bCant = b.length
// console.log(bCant);

// var c = miLista.lista[2]
// console.log(c);
// var cCant = c.length
// console.log(cCant);

//Buscar el mayor
// var mayor = 0;
// var posicion = -1;
// if (aCant > mayor) {
//     mayor = aCant
//     posicion = 0;
// }
// //---
// if (bCant > mayor){
//     mayor = bCant;
//     posicion = 1;
// }
// //---
// if (cCant > mayor){
//     mayor = cCant;
//     posicion = 2;
// }
// console.log('La mayor cantidad de caracteres tiene: ' + mayor);
// console.log('La CADENA con mayor cantidad de caracteres es: ' + miLista.lista[posicion]);

// Realizar el mismo ejercicio pero con un for 
var mayor = 0;
var posicion = -1;

for (var i = 0; i < miLista.lista.length; i++) {
    var cadena = miLista.lista[i];
    var cantidad = cadena.length;

    console.log(cadena);
    console.log(cantidad);

    if (cantidad > mayor) {
        mayor = cantidad;
        posicion = i;
    }
}

console.log('La mayor cantidad de caracteres tiene: ' + mayor);
console.log('La CADENA con mayor cantidad de caracteres es: ' + miLista.lista[posicion]);



console.log(miLista.lista);

function actualizarResultado() {
    document.getElementById('result').innerHTML = `Resultado: [ ${miLista.lista.join(', ')} ]`;
}

function agregar() {
    const valor = document.getElementById('inputValor').value;
    if (valor) {
        miLista.agregar(valor);
        actualizarResultado();
        document.getElementById('inputValor').value = ''; // Limpiar input
    }
}

function eliminar() {
    const valor = document.getElementById('inputValor').value;
    if (valor) {
        miLista.eliminar(valor);
        actualizarResultado();
        document.getElementById('inputValor').value = ''; // Limpiar input
    }
}

function buscar() {
    const valor = document.getElementById('inputValor').value;
    if (valor) {
        const index = miLista.buscar(valor);
        alert(index !== -1 ? `La cadena "${valor}" está en la posición ${index}` : `"${valor}" no se encuentra en la lista.`);
    }
}

function ordenar() {
    miLista.ordenar();
    actualizarResultado();
}