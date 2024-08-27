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
        return 'En la universidad ' + this.universidad;
    }

    Modificar_Saludo() {
        this.nombre = prompt ("Ingrese su nuevo saludo")
        return 'Hola,'+ this.nombre;
   }

    Modificar_Edad() {
      this.edad = prompt ("Ingrese su nueva edad porfavor")
      return '¡Felicidades! tienes ' + this.edad + ' años.';
  }
    Modificar_Carrera() {
      this.carrera = prompt ("Colocar su nueva carrera")
      return 'Estoy estudiando ' + this.carrera;
  }

   Modificar_Universidad() {
     this.universidad = prompt ("Colocar su nueva universidad")
     return 'En la universidad ' + this.universidad;
  }
  
}
  // Crear una instancia de la clase Persona
  const persona = new Persona('Santiago', 18, 'Ingeniería Industrial', 'Catolica', 'Saludo');
  
  // Inicializar los elementos HTML
  const Saludar = document.getElementById('saludar'); //obtener cosas de hatml a js, document.getElementById (id, escrito igual)
  const edad = document.getElementById('edad');
  const carrera = document.getElementById('carrera');
  const universidad = document.getElementById('universidad');
  
  

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
    Saludar.textContent = persona.Modificar_Saludo();
    
  }

  function botonModificarEdad() {
    edad.textContent = persona.Modificar_Edad();
  }

  function botonModificarCarrera() {
    carrera.textContent = persona.Modificar_Carrera();
  }

  function botonModificarUniversidad() {
    universidad.textContent = persona.Modificar_Universidad();
  }

