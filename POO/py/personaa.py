class Persona:
    def __init__(self, nombre='Santiago', edad=18, carrera='Ingeniería Industrial', universidad='Catolica'):
        # Constructor que inicializa los atributos de la clase Persona con valores por defecto
        self.nombre = nombre
        self.edad = edad
        self.carrera = carrera
        self.universidad = universidad
        self.saludo_eliminado = False  # Estado para verificar si el saludo ha sido eliminado
        self.edad_eliminada = False  # Estado para verificar si la edad ha sido eliminada
        self.carrera_eliminada = False  # Estado para verificar si la carrera ha sido eliminada
        self.universidad_eliminada = False  # Estado para verificar si la universidad ha sido eliminada

    def validar_entrada(self, entrada):
        # Método para validar que la entrada no esté vacía y contenga solo letras y espacios entre palabras
        return entrada.strip() and all(part.isalpha() for part in entrada.split())

    def crear_saludo(self):
        # Método para crear el saludo si no ha sido eliminado
        if not self.saludo_eliminado:
            print("El saludo ya existe. Puedes modificarlo o eliminarlo.")
            return
        print(f'Hola, mi nombre es {self.nombre} y tengo {self.edad} años.')
        self.saludo_eliminado = False

    def saludar(self):
        # Método para devolver el saludo actual o un mensaje si ha sido eliminado
        if self.saludo_eliminado:
            return "Eliminaste la última modificación, crea primero para continuar."
        return f'Hola, mi nombre es {self.nombre} y tengo {self.edad} años.'

    def modificar_saludo(self):
        # Método para modificar el saludo si no ha sido eliminado
        if self.saludo_eliminado:
            return "El saludo ha sido eliminado. Debes crearlo antes de modificarlo."
        nombre = input("Ingresa un nuevo nombre: ")
        while not self.validar_entrada(nombre):
            print("Nombre inválido, solo se permiten letras y espacios entre palabras.")
            nombre = input("Ingresa nuevamente el nombre: ")
        self.nombre = nombre
        print(f'Hola, mi nombre es {self.nombre} y tengo {self.edad} años.')

    def eliminar_saludo(self):
        # Método para eliminar el saludo
        if self.saludo_eliminado:
            return "El saludo ya ha sido eliminado."
        self.saludo_eliminado = True
        print("Saludo eliminado.")

    def crear_edad(self):
        # Método para crear la edad si no ha sido eliminada
        if not self.edad_eliminada:
            print("La edad ya existe. Puedes modificarla o eliminarla.")
            return
        print(f'¡Felicidades! tienes {self.edad} años.')
        self.edad_eliminada = False

    def modificar_edad(self):
        # Método para modificar la edad si no ha sido eliminada
        if self.edad_eliminada:
            return "La edad ha sido eliminada. Debes crearla antes de modificarla."
        while True:
            edad = input("Ingresa tu nueva edad: ")
            if edad.isdigit() and 0 < int(edad) <= 120:
                self.edad = int(edad)
                print(f'¡Felicidades! tienes {self.edad} años.')
                break
            else:
                print("Edad inválida, debe ser un número entre 1 y 120.")

    def eliminar_edad(self):
        # Método para eliminar la edad
        if self.edad_eliminada:
            return "La edad ya ha sido eliminada."
        self.edad_eliminada = True
        print("Edad eliminada.")

    def crear_carrera(self):
        # Método para crear la carrera si no ha sido eliminada
        if not self.carrera_eliminada:
            print("La carrera ya existe. Puedes modificarla o eliminarla.")
            return
        print(f'Estoy estudiando {self.carrera}')
        self.carrera_eliminada = False

    def modificar_carrera(self):
        # Método para modificar la carrera si no ha sido eliminada
        if self.carrera_eliminada:
            return "La carrera ha sido eliminada. Debes crearla antes de modificarla."
        carrera = input("Coloca tu nueva carrera: ")
        while not self.validar_entrada(carrera):
            print("Carrera inválida, solo se permiten letras y espacios entre palabras.")
            carrera = input("Ingresa nuevamente la carrera: ")
        self.carrera = carrera
        print(f'Estoy estudiando {self.carrera}')

    def eliminar_carrera(self):
        # Método para eliminar la carrera
        if self.carrera_eliminada:
            return "La carrera ya ha sido eliminada."
        self.carrera_eliminada = True
        print("Carrera eliminada.")

    def crear_universidad(self):
        # Método para crear la universidad si no ha sido eliminada
        if not self.universidad_eliminada:
            print("La universidad ya existe. Puedes modificarla o eliminarla.")
            return
        print(f'En la universidad {self.universidad}')
        self.universidad_eliminada = False

    def modificar_universidad(self):
        # Método para modificar la universidad si no ha sido eliminada
        if self.universidad_eliminada:
            return "La universidad ha sido eliminada. Debes crearla antes de modificarla."
        universidad = input("Coloca tu nueva universidad: ")
        while not self.validar_entrada(universidad):
            print("Universidad inválida, solo se permiten letras y espacios entre palabras.")
            universidad = input("Ingresa nuevamente la universidad: ")
        self.universidad = universidad
        print(f'En la universidad {self.universidad}')

    def eliminar_universidad(self):
        # Método para eliminar la universidad
        if self.universidad_eliminada:
            return "La universidad ya ha sido eliminada."
        self.universidad_eliminada = True
        print("Universidad eliminada.")

    def manejar_opcion(self, crear_func, modificar_func, eliminar_func):
        # Método para manejar las opciones de crear, modificar, eliminar y volver en los submenús
        while True:
            print("\nOpciones:")
            print("1. Crear")
            print("2. Modificar")
            print("3. Eliminar")
            print("4. Volver")
            opcion = input("Elige una opción (1-4): ")
            if opcion == "1":
                crear_func()
            elif opcion == "2":
                modificar_func()
            elif opcion == "3":
                eliminar_func()
            elif opcion == "4":
                self.iniciar()  # Vuelve al menú principal
                break
            else:
                print("Opción no válida. Intenta de nuevo.")

    def iniciar(self):
        # Método principal para iniciar el programa y manejar el menú inicial
        while True:
            print("\nBienvenido a mi página, ¿qué deseas hacer?")
            print("1. Saludo")
            print("2. Edad")
            print("3. Carrera")
            print("4. Universidad")
            opcion = input("Elige una opción (1-4): ")
            if opcion == "1":
                print(self.saludar())
                self.manejar_opcion(self.crear_saludo, self.modificar_saludo, self.eliminar_saludo)
            elif opcion == "2":
                if self.edad_eliminada:
                    print("Eliminaste la última modificación, crea primero para continuar.")
                else:
                    print(f'¡Felicidades! tienes {self.edad} años.')
                self.manejar_opcion(self.crear_edad, self.modificar_edad, self.eliminar_edad)
            elif opcion == "3":
                if self.carrera_eliminada:
                    print("Eliminaste la última modificación, crea primero para continuar.")
                else:
                    print(f'Estoy estudiando {self.carrera}')
                self.manejar_opcion(self.crear_carrera, self.modificar_carrera, self.eliminar_carrera)
            elif opcion == "4":
                if self.universidad_eliminada:
                    print("Eliminaste la última modificación, crea primero para continuar.")
                else:
                    print(f'En la universidad {self.universidad}')
                self.manejar_opcion(self.crear_universidad, self.modificar_universidad, self.eliminar_universidad)
            else:
                print("Opción no válida. Intenta de nuevo.")

# Ejemplo de uso
persona = Persona()  # Crea una instancia de la clase Persona
persona.iniciar()  # Inicia el programa



