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
      this.nombre = prompt("Ingresa un nuevo nombre");
      while (!this.nombre || !isNaN(this.nombre)) {  
          alert("Nombre invalido, coloca letras porfavor");
          this.nombre = prompt("Ingresa nuevamente el nombre");
        }
        return 'Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.'
    }

    Modificar_Edad() {
        this.edad = prompt("Ingrese su nueva edad");
      while (this.edad <= 0) {
          alert("Numero invalido, porfavor ponga un numero mayor a cero");
          this.edad = prompt("Ingrese su edad nuevamente");
        }
        return '¡Felicidades! tienes ' + this.edad + ' años.';
    }
   
    Modificar_Carrera() {
      this.carrera = prompt ("Colocar su nueva carrera")
      while (!this.carrera || !isNaN(this.carrera)) {
        alert("Carrera invalida, coloca letras porfavor");
        this.carrera = prompt("Ingresa nuevamente la carrera");
      }
      return 'Estoy estudiando ' + this.carrera;
  }

   Modificar_Universidad() {
     this.universidad = prompt ("Colocar su nueva universidad")
     while (!this.universidad || !isNaN(this.universidad )) {
      alert("Universidad invalida, coloca letras porfavor");
      this.universidad  = prompt("Ingresa nuevamente el nombre");
    }
     return 'En la universidad ' + this.universidad;
  }
   
   Eliminar_Saludo() {
    delete 'Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.'
    
   }

   Eliminar_Edad() {
    delete '¡Felicidades! tienes ' + this.edad + ' años.';
   }
   
   Eliminar_Carrera() {
    delete 'Estoy estudiando ' + this.carrera;
   }

   Eliminar_Universidad() {
    delete 'En la universidad ' + this.universidad;
   }
}
  // Crear una instancia de la clase Persona
  const persona = new Persona('Santiago', 18, 'Ingeniería Industrial', 'Catolica',);
  
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
    saludar.textContent = persona.Modificar_Saludo();
    
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

  function botonEliminarSaludo() {
    saludar.textContent = persona.Eliminar_Saludo();
  }

  function botonEliminarEdad() {
    edad.textContent = persona.Eliminar_Edad();
  }

  function botonEliminarCarrera() {
    carrera.textContent = persona.Eliminar_Carrera();
  }

  function botonEliminarUniversidad() {
    universidad.textContent = persona.Eliminar_Universidad();
  }

