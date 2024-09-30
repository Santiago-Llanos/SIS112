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

let miLista = new ListaCadenas();

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