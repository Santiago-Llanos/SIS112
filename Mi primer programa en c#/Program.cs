namespace mi_primera_programa_en_c_;

class Program
{
    static void Main(string[] args)
    {
        //Primer metodo, mostrar un Hola Mundo
        HelloWorld();

        //Segundo metodo, mostrar la edad ingresada por el usuario
        ObtainAge();
       

        CalculateAge();
    }

    public static void HelloWorld()
    {
        Console.WriteLine("Hello, World!");
    }

    public static void ObtainAge()
    {
        Console.WriteLine("Put your age:");
        string? ageInput = Console.ReadLine();
        if (string.IsNullOrEmpty(ageInput))
        {
            Console.WriteLine("Put a value");
        }
        else
        {
            int ageInteger = Int32.Parse(ageInput);
            Console.WriteLine("Your age is: " + ageInteger);
        }
    }

    public static void CalculateAge()
    {
        Console.WriteLine("Put your born year");
        string? agebornInput = Console.ReadLine();
        if (string.IsNullOrEmpty(agebornInput))
        {
            Console.WriteLine("Put a worth value");
        }
        else
        {
            int ageborn = Int32.Parse(agebornInput);
            Console.WriteLine("Your calculate age is: " + (2024 - ageborn)); 
        }
    }
}