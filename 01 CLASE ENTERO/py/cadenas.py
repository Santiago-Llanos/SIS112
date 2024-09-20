class Cadena:
    def __init__(self, cadena):
        self.cadena = cadena

    # Obtener el valor asignado a la cadena
    def get_cadena(self):
        return self.cadena

    # Manipulación de cadenas
    def concatenar(self, otra_cadena):
        self.cadena += otra_cadena

    def invertir(self):
        self.cadena = self.cadena[::-1]  # Invertir la cadena usando slicing

    # Comparaciones
    def es_vacia(self):
        return len(self.cadena) == 0

    def contiene(self, subcadena):
        return subcadena in self.cadena

    def comienza_con(self, prefijo):
        return self.cadena.startswith(prefijo)

    def termina_con(self, sufijo):
        return self.cadena.endswith(sufijo)

    # Otras operaciones
    def longitud(self):
        return len(self.cadena)

    def a_mayusculas(self):
        return self.cadena.upper()

    def a_minusculas(self):
        return self.cadena.lower()
