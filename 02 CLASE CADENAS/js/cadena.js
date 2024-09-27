class Cadena {
    constructor(cadena) {
      this.cadena = cadena;
    }
  
    getCadena() { //Obtiene el valor asignado a la cadena
      return this.cadena;
    }
  
    // Manipulación de cadenas
    concatenar(otraCadena) {  //Unir una cadena con otra
      this.cadena += otraCadena;
    }
  
    invertir() { //Invertir los caracteres de la cadena
      let cadenaInvertida = '';
      for (let i = this.cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += this.cadena[i];
      }
      this.cadena = cadenaInvertida;
    }
  
    // Comparaciones
    esVacia() { //Compara si la cadena no tiene caracteres
      return this.cadena.length === 0;
    }
  
    contiene(subcadena) { //Compara si la subCadena existe dentro de la cadena
      return this.cadena.includes(subcadena);
    }
  
    comienzaCon(prefijo) { //Compara si la cadena comienza con el prefijo "caracter"
      return this.cadena.startsWith(prefijo);
    }
  
    terminaCon(sufijo) { //Compara si la cadena termina con el sufijo "caracter"
      return this.cadena.endsWith(sufijo);
    }
  
    // Otras operaciones
    longitud() { //Obtiene la cantidad de caracteres que tiene la cadena
      return this.cadena.length;
    }
  
    aMayusculas() { //Obtiene la cadena transformada en MAYUSCULA
      return this.cadena.toUpperCase();
    }
  
    aMinusculas() { //Obtiene la cadena transformada en minuscula
      return this.cadena.toLowerCase();
    }

    convertirARomano(numero) {
      if (numero <= 0) return "Ingrese un número positivo";
      
      const romanos = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
      ];
  
      let resultado = '';
      for (let [letra, valor] of romanos) {
        while (numero >= valor) {
          resultado += letra;
          numero -= valor;
        }
      }
      return resultado;
    }

    generarTexto(cantidadPalabras) {
      const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // Caracteres permitidos
      const cantidadMaxLetras = 6; // Máximo de caracteres por palabra
      let resultado = '';
  
      for (let i = 0; i < cantidadPalabras; i++) {
        let palabra = '';
        const cantidadLetras = Math.floor(Math.random() * cantidadMaxLetras) + 1; // Genera entre 1 y 6 caracteres por palabra
        
        for (let j = 0; j < cantidadLetras; j++) {
          palabra += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
  
        // Agregar espacio después de cada palabra (excepto la última)
        resultado += palabra + (i < cantidadPalabras - 1 ? ' ' : '');
      }
  
      return resultado;
    }

    convertirAAscii(numero) {
      if (numero <= 0 || numero > 127) return "Ingrese un número válido entre 1 y 127";
      return String.fromCharCode(numero); // Convierte el número a su representación en ASCII
    }
  }


  
  let cadena = new Cadena('');
  
  function ejecutar(metodo) {
    const input = document.getElementById('inputCadena');
    const resultadoDiv = document.getElementById('resultado');
    const valorInput = input.value;
  
    switch (metodo) {
      case 'getCadena':
        resultadoDiv.innerHTML = `Cadena: ${cadena.getCadena()}`;
        break;
      case 'concatenar':
        cadena.concatenar(valorInput);
        resultadoDiv.innerHTML = `Cadena actual: ${cadena.getCadena()}`;
        break;
      case 'invertir':
        cadena.invertir();
        resultadoDiv.innerHTML = `Cadena invertida: ${cadena.getCadena()}`;
        break;
      case 'esVacia':
        resultadoDiv.innerHTML = `¿Es vacía?: ${cadena.esVacia()}`;
        break;
      case 'contiene':
        resultadoDiv.innerHTML = `¿Contiene '${valorInput}'?: ${cadena.contiene(valorInput)}`;
        break;
      case 'comienzaCon':
        resultadoDiv.innerHTML = `¿Comienza con '${valorInput}'?: ${cadena.comienzaCon(valorInput)}`;
        break;
      case 'terminaCon':
        resultadoDiv.innerHTML = `¿Termina con '${valorInput}'?: ${cadena.terminaCon(valorInput)}`;
        break;
      case 'longitud':
        resultadoDiv.innerHTML = `Longitud: ${cadena.longitud()}`;
        break;
      case 'aMayusculas':
        resultadoDiv.innerHTML = `A mayúsculas: ${cadena.aMayusculas()}`;
        break;
      case 'aMinusculas':
        resultadoDiv.innerHTML = `A minúsculas: ${cadena.aMinusculas()}`;
        break;
      case 'convertirARomano':
          const numero = parseInt(valorInput);
          if (isNaN(numero)) {
            resultadoDiv.innerHTML = 'Por favor, ingrese un número válido.';
          } else {
            resultadoDiv.innerHTML = `Número romano: ${cadena.convertirARomano(numero)}`;
          }
          break;
      case 'generarTexto':
            const cantidadPalabras = parseInt(valorInput);
            if (isNaN(cantidadPalabras) || cantidadPalabras <= 0) {
              resultadoDiv.innerHTML = 'Por favor, ingrese una cantidad válida de palabras.';
            } else {
              resultadoDiv.innerHTML = `Texto generado: ${cadena.generarTexto(cantidadPalabras)}`;
            }
        break;
      case 'convertirAAscii':
          const numeroAscii = parseInt(valorInput);
          if (isNaN(numeroAscii)) {
            resultadoDiv.innerHTML = 'Por favor, ingrese un número válido.';
          } else {
            resultadoDiv.innerHTML = `Carácter ASCII: ${cadena.convertirAAscii(numeroAscii)}`;
          }
        break;
      default:
          resultadoDiv.innerHTML = 'Método no reconocido.';
    }
  }

