// Ejercicio 1

// Crea una interfaz 'Person' que tenga como atributos 'name', 'age' y 'profession'. Ahora define una arrow function que tenga como parámetro esta interaz y que devuelva un array con sus propiedades.
// Esta función tiene que tener tipado el parámetro de entrada y el return
// return - ["name", "age", "profession"]

interface Person {
    name: String;
    age: Number;
    profession: String;    
}

const person : Person ={
    name: "Dan",
    age: 37,
    profession: "Front End"    
};
const interfaz = [person.name,person.age,person.profession];
console.log(interfaz);

interfaz.forEach((i) =>  console.log(i));


// Ejercicio 2

//Escribe una función llamada sumOrConcatenate que acepte dos parámetros. Cada uno de estos parámetros podrá ser de tipo number o string. La función devolverá una suma si los dos parámetros son números, una concatenación con el símbolo - si son los dos strings o una cadena concatenadad con : si uno es un number y el otro string.




// Ejercicio 3

// Crea dos interfaces, una llamada 'Car' y otra 'Motorcycle'. La primera tendrá las propiedades tires (number), turnOnEngine() (función que devuelve void) y pressPedal() (funciónn que devuelve void),
// La segunda tendrá las propiedades tires (number), turnOnEngine() (función que devuelve void) y openThrottle() (funciónn que devuelve void).
// Escribe una función que acepte un parámetro que pueda ser Car o Motorcycle que, primero llame a turnOnEngine, y luego si es Car llame a pressPedal pero si es Motorcycle llame a openThrottle().
// Para la comprobación no valdrá typeof, necesitaremos hacer uso de type predicates https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
interface Car {
    tires : Number;
    turnOnEngine(): void;
    pressPedal(): void;
}
interface Motorcycle { 
    tires : Number;
    turnOnEngine(): void;   
    openThrottle(): void;
}

function isCar(vehicule: Car | Motorcycle): vehicule is Car {
  return (vehicule as Car).pressPedal !== undefined;
}

function getVehicule(vehicule: any) {
    if (isCar(vehicule)) {
    vehicule.pressPedal();
    } else {
    vehicule.openThrottle();
    }
}

const garage: (Car | Motorcycle)[] = [];
const road: Car[] = garage.filter(isCar);

// Ejercicio 4

//Crea una función genérica, que acepte un array que pueda contener strings y numbers y devuelva el mismo array sin el primer elemento.


interface General {
    (mixedArray: Array<number|string>):void
}

let funcionGeneral:General
funcionGeneral = function(mixedArray: Array<number|string>):void {
    console.log(`${mixedArray}`)
}

funcionGeneral(['Hello', 'I', 'have', 3, 'tasks'])