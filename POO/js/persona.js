class Persona {
   constructor(nombre, edad, carrera, universidad) {
      this.nombre = nombre;
      this.edad = edad;
      this.carrera = carrera;
      this.universidad = universidad;
      
    }
  
    saludar() {
      return 'Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.'
    }
  
    cumpleanios() {
      return '¡Felicidades! tienes ' + this.edad + ' años.';
    }
  
    estudiar() {
      return 'Estoy estudiando ' + this.carrera;
    }

    Universidad() {
        return 'Estudio en la universidad ' + this.universidad;
    }

    Modificar_Saludo() {
        this.nombre = prompt ("Ingrese su nuevo nombre")
        return 'Buenasss mi nombre es' + this.nombre;
   }
}
  // Crear una instancia de la clase Persona
  const persona = new Persona('Santiago', 18, 'Ingeniería Industrial', 'Catolica', 'Saludo');
  
  // Inicializar los elementos HTML
  const Saludar = document.getElementById('saludar'); //obtener cosas de hatml a js, document.getElementById (id, escrito igual)
  const edad = document.getElementById('edad');
  const carrera = document.getElementById('carrera');
  const universidad = document.getElementById('universidad');
  const saludo = document.getElementById('saludo');

  // Función para saludar
   function botonSaludar() {
    saludar.textContent = persona.saludar();
  }
  
  // Función para cumpleaños
  function botonCumpleanios() {
    edad.textContent = persona.cumpleanios();
  }
  
  // Función para estudiar
  function botonEstudiar() {
    carrera.textContent = persona.estudiar();
  }

  function botonUniversidad() {
    universidad.textContent = persona.Universidad();
  }

  function botonModificarSaludo() {
    saludo.textContent = persona.Modificar_Saludo();
    
  }

