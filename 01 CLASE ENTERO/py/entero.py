class Entero:
    def __init__(self,Numero):
        self.Num = Numero

    def setNum(self):
        input_value = input("Enter a number: ")
        self.Num = int(input_value)

    def getNum(self):
        return self.Num
    
    def showNum(self):
        print(self.getNum())

    def showResultado(self, respuesta):
        print(respuesta)

    def incremnetarNum(self):
        self.Num += 1

    def decremnetarNum(self):
        self.Num -= 1 
    
    def esParImpar(self):
        return (self.Num % 2 == 0)
    
    def esPerfecto(self):
        suma_divisores = sum([i for i in range(1, self.Num) if self.Num % i == 0])
        return suma_divisores == self.Num

    def esPrimo(self):
        if self.Num <= 1:
            return False
        for i in range(2, int(self.Num ** 0.5) + 1):
            if self.Num % i == 0:
                return False
        return True

    def fibonacci(self):
        fibo = [0, 1]
        while fibo[-1] < self.Num:
            fibo.append(fibo[-1] + fibo[-2])
        if fibo[-1] > self.Num:
            fibo.pop()  # Eliminar el último número si supera a self.Num
        return fibo
    
    def menu(self):
        while True:
            print("\nMenu:")
            print("1. Establecer un nuevo numero")
            print("2. Mostrar el numero actual")
            print("3. Incrementar el numero")
            print("4. Decrementar el numero")
            print("5. Verificar si es par o impar")
            print("6. Verificar si es un número perfecto")
            print("7. Verificar si es un número primo")
            print("8. Mostrar la sucesión de Fibonacci")
            print("9. Salir")

            opcion = input("Ingrese una opcion: ")

            if opcion == '1':
                self.setNum()
            elif opcion == '2':
                self.showNum()
            elif opcion == '3':
                self.incremnetarNum()
            elif opcion == '4':
                self.decremnetarNum()
            elif opcion == '5':
                if self.esParImpar():
                    print("El numero es par")
                else:
                    print("El numero es impar")
            elif opcion == '6':
                if self.esPerfecto():
                    print("El numero es perfecto")
                else:
                    print("El numero no es perfecto")
            elif opcion == '7':
                if self.esPrimo():
                    print("El numero es primo")
                else:
                    print("El numero no es primo")
            elif opcion == '8':
                print(f"La sucesión de Fibonacci hasta {self.Num} es: {self.fibonacci()}")
            elif opcion == '9':
                print ("Hasta luego!")
                break
            else:
                print("Opcion invalida.Intente nuevamente")
    

numero = Entero(10)

numero.menu()

