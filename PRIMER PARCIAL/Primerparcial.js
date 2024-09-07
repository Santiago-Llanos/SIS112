class Materia {
  constructor(nombreMateria, sigla, docente, horarios, aula, prerequisito, carrera, universidad, cantidadInscritos) {
    this.nombreMateria = nombreMateria;
    this.sigla = sigla;
    this.docente = docente;
    this.horarios = horarios;
    this.aula = aula;
    this.prerequisito = prerequisito;
    this.carrera = carrera;
    this.universidad = universidad;
    this.cantidadInscritos = cantidadInscritos;
  }

  // Método para mostrar la información de la materia
  mostrarInformacion() {
    return `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Docente: ${this.docente} - Horarios: ${this.horarios} - Aula: ${this.aula} - Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  // Método para modificar el nombre de la materia
  modificarNombreMateria() {
    this.nombreMateria = prompt("Ingrese el nuevo nombre de la materia");
    while (!this.nombreMateria || !this.nombreMateria.trim() || !/^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s]+$/.test(this.nombreMateria))  {
      alert("Nombre de materia inválido, por favor ingrese letras");
      this.nombreMateria = prompt("Ingrese el nuevo nombre de la materia");
    }
    return `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Docente: ${this.docente} - Horarios: ${this.horarios} - Aula: ${this.aula} - Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  // Método para modificar la sigla de la materia
  modificarSigla() {
    this.sigla = prompt("Ingrese la nueva sigla de la materia");
    while (!this.sigla || !isNaN(this.sigla)) {
      alert("Sigla inválida, por favor ingrese nuevamentes");
      this.sigla = prompt("Ingrese la nueva sigla de la materia");
    }
    return `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Docente: ${this.docente} - Horarios: ${this.horarios} - Aula: ${this.aula} - Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  // Método para modificar el docente de la materia
  modificarDocente() {
    this.docente = prompt("Ingrese el nuevo docente de la materia");
    while (!this.docente|| /[^a-zA-ZñÑáéíóúÁÉÍÓÚ]/.test(this.docente))  {
      alert("Docente inválido, por favor ingrese letras");
      this.docente = prompt("Ingrese el nuevo docente de la materia");
    }
    return `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Docente: ${this.docente} - Horarios: ${this.horarios} - Aula: ${this.aula} - Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  // Método para modificar los horarios de la materia
  modificarHorarios() {
    this.horarios = prompt("Ingrese los nuevos horarios de la materia");
    while (!this.horarios || !isNaN(this.horarios)) {
      alert("Horarios inválidos, por favor ingrese letras");
      this.horarios = prompt("Ingrese los nuevos horarios de la materia");
    }
    return `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Docente: ${this.docente} - Horarios: ${this.horarios} - Aula: ${this.aula} - Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  // Método para modificar el aula de la materia
  modificarAula() {
    this.aula = prompt("Ingrese el nuevo aula de la materia");
    while (!this.aula || !isNaN(this.aula)) {
      alert("Aula inválida, por favor ingrese letras");
      this.aula = prompt("Ingrese el nuevo aula de la materia");
    }
    return `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Docente: ${this.docente} - Horarios: ${this.horarios} - Aula: ${this.aula} - Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  // Método para modificar el prerequisito de la materia
  modificarPrerequisito() {
    this.prerequisito = prompt("Ingrese el nuevo prerequisito de la materia");
    while (!this.prerequisito || /[^a-zA-ZñÑáéíóúÁÉÍÓÚ]/.test(this.prerequisito)) {
      alert("Prerequisito inválido, por favor ingrese letras");
      this.prerequisito = prompt("Ingrese el nuevo prerequisito de la materia");
    }
    return `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Docente: ${this.docente} - Horarios: ${this.horarios} - Aula: ${this.aula} - Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  // Método para modificar la carrera de la materia
  modificarCarrera() {
    this.carrera = prompt("Ingrese la nueva carrera de la materia");
    while (!this.carrera  || /[^a-zA-ZñÑáéíóúÁÉÍÓÚ]/.test(this.carrera ))  {
      alert("Carrera inválida, por favor ingrese letras");
      this.carrera = prompt("Ingrese la nueva carrera de la materia");
    }
    return `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Docente: ${this.docente} - Horarios: ${this.horarios} - Aula: ${this.aula} - Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  // Método para modificar la universidad de la materia
  modificarUniversidad() {
    this.universidad = prompt("Ingrese la nueva universidad de la materia");
    while (!this.universidad || /[^a-zA-ZñÑáéíóúÁÉÍÓÚ]/.test(this.universidad))  {
      alert("Universidad inválida, por favor ingrese letras");
      this.universidad= prompt("Ingrese la nueva universidad de la materia");
    }
    return `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Docente: ${this.docente} - Horarios: ${this.horarios} - Aula: ${this.aula} - Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }
  // Método para modificar la cantidad de inscritos de la materia
  modificarCantidadInscritos() {
    this.cantidadInscritos = prompt("Ingrese la nueva cantidad de inscritos de la materia");
    while (this.cantidadInscritos <= 0) {
      alert("Cantidad de inscritos inválida, por favor ingrese un número mayor a cero");
      this.cantidadInscritos = prompt("Ingrese la nueva cantidad de inscritos de la materia");
    }
    return `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Docente: ${this.docente} - Horarios: ${this.horarios} - Aula: ${this.aula} - Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  eliminarAtributos() {
  delete `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Docente: ${this.docente} - Horarios: ${this.horarios} - Aula: ${this.aula} - Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  eliminarNombreMateria() {
    delete this.nombreMateria;
    return ` Sigla: ${this.sigla} - Docente: ${this.docente} - Horarios: ${this.horarios} - Aula: ${this.aula} - Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  // Método para eliminar la sigla de la materia
  eliminarSigla() {
    delete this.sigla;
    return `Materia: ${this.nombreMateria}  - Docente: ${this.docente} - Horarios: ${this.horarios} - Aula: ${this.aula} - Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  // Método para eliminar el docente de la materia
  eliminarDocente() {
    delete this.docente;
    return `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Horarios: ${this.horarios} - Aula: ${this.aula} - Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  // Método para eliminar los horarios de la materia
  eliminarHorarios() {
    delete this.horarios;
    return `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Docente: ${this.docente}- Aula: ${this.aula} - Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  // Método para eliminar el aula de la materia
  eliminarAula() {
    delete this.aula;
    return `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Docente: ${this.docente} - Horarios: ${this.horarios}- Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  // Método para eliminar el prerequisito de la materia
  eliminarPrerequisito() {
    delete this.prerequisito;
    return `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Docente: ${this.docente} - Horarios: ${this.horarios} - Aula: ${this.aula}- Carrera: ${this.carrera} - Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  // Método para eliminar la carrera de la materia
  eliminarCarrera() {
    delete this.carrera;
    return `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Docente: ${this.docente} - Horarios: ${this.horarios} - Aula: ${this.aula} - Prerequisito: ${this.prerequisito}- Universidad: ${this.universidad} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  // Método para eliminar la universidad de la materia
  eliminarUniversidad() {
    delete this.universidad;
    return `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Docente: ${this.docente} - Horarios: ${this.horarios} - Aula: ${this.aula} - Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Cantidad de inscritos: ${this.cantidadInscritos}`;
  }

  // Método para eliminar la cantidad de inscritos de la materia
  eliminarCantidadInscritos() {
    delete this.cantidadInscritos;
    return `Materia: ${this.nombreMateria} - Sigla: ${this.sigla} - Docente: ${this.docente} - Horarios: ${this.horarios} - Aula: ${this.aula} - Prerequisito: ${this.prerequisito} - Carrera: ${this.carrera} - Universidad: ${this.universidad}`;
  }
}

// Crear una instancia de la clase Materia
const calculo1 = new Materia("Cálculo 1", "MAT-132", "Victor Hugo Aapiazu", "Lunes 7-9, Miércoles 7-9", "Aula 10 N4", "Mate Basica", "Ingeniería Industrial", "Universidad Catolica", 34);
const manufacturaYMecanizado = new Materia("Manufactura y Mecanizado", "IND-112", "Ing. Jorge Salvatierra", "Martes 7-9, Jueves 7-9, Viernes 7-9", "Aula 6 N3, Lab de Procesos", "Diseno Indsutrial", "Ingeniería Industrial", "Universidad Catolica", 15);
const antropologiaYValores = new Materia("Antropología y Valores", "FCH-101", "Exalta Gabriela", "Martes 9-11, Jueves 9-11", "Aula 4 N3, Aula B2-1", "Ninguno", "Ingeniería Industrial", "Universidad Catolica", 61);
const programacion1 = new Materia("Programación 1", "SIS-112", "Ing. Eddy Escalante", "Lunes 11-12:20, Viernes 9-11:30", "Laboratorio de Computo 5 C2-2", "Intro a Progra", "Ingeniería Industrial ", "Universidad Catolica", 16);
const probabilidadYEstadistica = new Materia("Probabilidad y Estadística", "MAT-142", "Carmen Barca", "Martes 11-12:20, Jueves 11-12:20", "Lab de Computo 2 D2-1", "Ninguno", "Ingeniería Industrial", "Universidad Catolica", 33);
const fisicaYLaboratorio = new Materia("Física y Laboratorio", "FIS-111", "Hugo Lobo, Roberto Carlos", "Lunes 9-11, Miércoles 9-11, Miercoles 9-12:20", "Aula E2-5, Lab de Procesos", "Ninguno", "Ingeniería Industrial", "Universidad Catolica", 45);

// Inicializar los elementos HTML
const materia1 = document.getElementById('calculo');
const materia2 = document.getElementById('manufactura');
const materia3 = document.geStElementById('antropologia');
const materia4 = document.getElementById('programacion');
const maetria5 = document.getElementById('probabilidad');
const materia6 = document.getElementById('fisica');
// const carrera = document.getElementById('carrera');
// const universidad = document.getElementById('universidad');
// const cantidadInscritos = document.getElementById('cantidadInscritos');

function botonMostrarInformacionCalculo() {
  calculo.textContent = calculo1.mostrarInformacion()
}
function botonMostrarInformacionManufactura() {
  manufactura.textContent = manufacturaYMecanizado.mostrarInformacion()
}
function botonMostrarInformacionAntro() {
  antropologia.textContent = antropologiaYValores.mostrarInformacion()
}
function botonMostrarInformacionProgra() {
  programacion.textContent = programacion1.mostrarInformacion()
}
function botonMostrarInformacionFisica() {
  fisica.textContent = fisicaYLaboratorio.mostrarInformacion()
}
function botonMostrarInformacionProbabilidad() {
  probabilidad.textContent = probabilidadYEstadistica.mostrarInformacion()
}


function botonModificarNombreMateriaCalculo() {
  calculo.textContent = calculo1.modificarNombreMateria();
}
function botonModificarNombreMateriaManu() {
  manufactura.textContent = manufacturaYMecanizado.modificarNombreMateria();
}
function botonModificarNombreMateriaAntro() {
  antropologia.textContent = antropologiaYValores.modificarNombreMateria();
}
function botonModificarNombreMateriaProgra() {
  programacion.textContent = programacion1.modificarNombreMateria();
}
function botonModificarNombreMateriaFisica() {
  fisica.textContent = fisicaYLaboratorio.modificarNombreMateria();
}
function botonModificarNombreMateriaProba() {
  probabilidad.textContent = probabilidadYEstadistica.modificarNombreMateria();
}


function botonModificarSiglaCalculo() {
  calculo.textContent = calculo1.modificarSigla();
}
function botonModificarSiglaManu() {
  manufactura.textContent = manufacturaYMecanizado.modificarSigla();
}
function botonModificarSiglaAntro() {
  antropologia.textContent = antropologiaYValores.modificarSigla();
}
function botonModificarSiglaProgra() {
  programacion.textContent = programacion1.modificarSigla();
}
function botonModificarSiglaFisica() {
  fisica.textContent = fisicaYLaboratorio.modificarSigla();
}
function botonModificarSiglaProba() {
  probabilidad.textContent = probabilidadYEstadistica.modificarSigla();
}


function botonModificarDocenteCalculo() {
  calculo.textContent = calculo1.modificarDocente();
}
function botonModificarDocenteManu() {
  manufactura.textContent = manufacturaYMecanizado.modificarDocente();
}
function botonModificarDocenteAntro() {
  antropologia.textContent = antropologiaYValores.modificarDocente();
}
function botonModificarDocenteProgra() {
  programacion.textContent = programacion1.modificarDocente();
}
function botonModificarDocenteFisica() {
  fisica.textContent = fisicaYLaboratorio.modificarDocente();
}
function botonModificarDocenteProba() {
  probabilidad.textContent = probabilidadYEstadistica.modificarDocente();
}


function botonModificarHorariosCalculo() {
  calculo.textContent = calculo1.modificarHorarios();
}
function botonModificarHorariosManu() {
  manufactura.textContent = manufacturaYMecanizado.modificarHorarios();
}
function botonModificarHorariosAntro() {
  antropologia.textContent = antropologiaYValores.modificarHorarios();
}
function botonModificarHorariosProgra() {
  programacion.textContent = programacion1.modificarHorarios();
}
function botonModificarHorariosFisica() {
  fisica.textContent = fisicaYLaboratorio.modificarHorarios();
}
function botonModificarHorariosProba() {
  probabilidad.textContent = probabilidadYEstadistica.modificarHorarios();
}


function botonModificarAulaCalculo() {
  calculo.textContent = calculo1.modificarAula();
}
function botonModificarAulaManu() {
  manufactura.textContent = manufacturaYMecanizado.modificarAula();
}
function botonModificarAulaAntro() {
  antropologia.textContent = antropologiaYValores.modificarAula();
}
function botonModificarAulaProgra() {
  programacion.textContent = programacion1.modificarAula();
}
function botonModificarAulaFisica() {
  fisica.textContent = fisicaYLaboratorio.modificarAula();
}
function botonModificarAulaProba() {
  probabilidad.textContent = probabilidadYEstadistica.modificarAula();
}


function botonModificarPrerequisitoCalculo() {
  calculo.textContent = calculo1.modificarPrerequisito();
}
function botonModificarPrerequisitoManu() {
  manufactura.textContent = manufacturaYMecanizado.modificarPrerequisito();
}
function botonModificarPrerequisitoAntro() {
  antropologia.textContent = antropologiaYValores.modificarPrerequisito();
}
function botonModificarPrerequisitoProgra() {
  programacion.textContent = programacion1.modificarPrerequisito();
}
function botonModificarPrerequisitoFisica() {
  fisica.textContent = fisicaYLaboratorio.modificarPrerequisito();
}
function botonModificarPrerequisitoProba() {
  probabilidad.textContent = probabilidadYEstadistica.modificarPrerequisito();
}


function botonModificarCarreraCalculo() {
  calculo.textContent = calculo1.modificarCarrera();
}
function botonModificarCarreraManu() {
  manufactura.textContent = manufacturaYMecanizado.modificarCarrera();
}
function botonModificarCarreraAntro() {
  antropologia.textContent = antropologiaYValores.modificarCarrera();
}
function botonModificarCarreraProgra() {
  programacion.textContent = programacion1.modificarCarrera();
}
function botonModificarCarreraFisica() {
  fisica.textContent = fisicaYLaboratorio.modificarCarrera();
}
function botonModificarCarreraProba() {
  probabilidad.textContent = probabilidadYEstadistica.modificarCarrera();
}


function botonModificarUniversidadCalculo() {
  calculo.textContent = calculo1.modificarUniversidad();
}
function botonModificarUniversidadManu() {
  manufactura.textContent = manufacturaYMecanizado.modificarUniversidad();
}
function botonModificarUniversidadAntro() {
  antropologia.textContent = antropologiaYValores.modificarUniversidad();
}
function botonModificarUniversidadProgra() {
  programacion.textContent = programacion1.modificarUniversidad();
}
function botonModificarUniversidadFisica() {
  fisica.textContent = fisicaYLaboratorio.modificarUniversidad();
}
function botonModificarUniversidadProba() {
  probabilidad.textContent = probabilidadYEstadistica.modificarUniversidad();
}


function botonModificarCantidadInscritosCalculo() {
  calculo.textContent = calculo1.modificarCantidadInscritos();
}
function botonModificarCantidadInscritosManu() {
  manufactura.textContent = manufacturaYMecanizado.modificarCantidadInscritos();
}
function botonModificarCantidadInscritosAntro() {
  antropologia.textContent = antropologiaYValores.modificarCantidadInscritos();
}
function botonModificarCantidadInscritosProgra() {
  programacion.textContent = programacion1.modificarCantidadInscritos();
}
function botonModificarCantidadInscritosFisica() {
  fisica.textContent = fisicaYLaboratorio.modificarCantidadInscritos();
}
function botonModificarCantidadInscritosProba() {
  probabilidad.textContent = probabilidadYEstadistica.modificarCantidadInscritos();
}


function botonEliminarAtributosCalculo() {
  calculo.textContent = calculo1.eliminarAtributos();
}
function botonEliminarAtributosManu() {
  manufactura.textContent = manufacturaYMecanizado.eliminarAtributos();
}
function botonEliminarAtributosAntro() {
  antropologia.textContent = antropologiaYValores.eliminarAtributos();
}
function botonEliminarAtributosProgra() {
  programacion.textContent = programacion1.eliminarAtributos();
}
function botonEliminarAtributosFisica() {
  fisica.textContent = fisicaYLaboratorio.eliminarAtributos();
}
function botonEliminarAtributosProba() {
  probabilidad.textContent = probabilidadYEstadistica.eliminarAtributos();
}





