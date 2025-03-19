// Funktionen

// Vordefinierten Funktionen:
console.log("hi!"); // Funktionsaufruf mit Parameter
console.clear(); // Funktionsaufruf ohne Parameter

// Erstellen einer einfachen Funktion ohne Rückgabe:
function greeter() {
    console.log("Hi");
}

greeter();

// Erstellen einer Funktion mit Rückgabe
function greetPerson(name) {
    return "Hallo " + name;
}
greetPerson("Christian");

console.log(greetPerson("Max Mustermann"));

function multiplier(numOne, numTwo) {
    return numOne * numTwo;
}

let ergebnis = multiplier(5, 25);
console.log(ergebnis);

let testX = multiplier;
console.log(testX(12, 44));

// Default-Werte
function divide(numOne, numTwo = "ups") {
    return numOne + numTwo;
}

console.log(divide("h"));

// Kontrollstrukturen
// if
// Können beliebig verschachtelt werden
// Der Blockinhalt wird nur dann ausgeführt, wenn die Bedingung wahr ist
let numberOne = 20;
let numberTwo = 30;

if (numberOne < numberTwo) {
    console.log(`${numberOne} ist kleiner als ${numberTwo}`);
}
else if (numberOne > numberTwo) {
    console.log(`${numberOne} ist größer als ${numberTwo}`);
}
else {
    console.log(`${numberOne} ist gleich groß wie ${numberTwo}`);
}

// Vergleichs-Operatoren:
/**
 * == selber Wert
 * === selber Wert und selber Typ
 * != ungleicher Wert
 * !== ungleicher Wert oder Typ
 * Empfehlung zu === und !==
 * < kleiner als
 * > größer als
 * >= größer gleich
 * <= kleiner gleich
 */

// Logische Operatoren:
// && => nur true wenn beide Bedingungen zutreffen
// || => true sobald eine der Bedingungen wahr ist

// switch-Case
switch (numberOne) {
    case 10:
        console.log("Zahl ist 10");
        break;
    case 20:
        console.log("Zahl ist 20");
        break;
    case 30:
        console.log("Zahl ist 30");
        break;
    case 40:
        console.log("Zahl ist 40");
        break;
    default:
        console.log("Zahl hat einen unerwarteten Wert");
}

// Loops | Schleifen
function countTo(limit) {
    console.log("Schleife startet:");
    for (let i = 0; i <= limit; i++) {
        console.log(i);
    }
    console.log("Schleife beendet.");
}

countTo(15);

// FizzBuzz
// Jede Zahl die nur durch 3 teilbar ist wird mit Fizz betitelt
// Jede Zahl die nur durch 5 teilbar ist wird mit Buzz betitelt
// Zahlen die sowohl durch 3 als auch 5 teilbar sind werden mit FizzBuzz betitelt
// Alle anderen Zahlen werden normal ausgegeben
// Wir wollen nun eine Funktion schreiben, die eine Obergrenze übergeben bekommt bis zu der gezählt werden soll
// Und jede dieser Zahlen soll dann auf ihre Teilbarkeit geprüft werden und nach den obigen Regeln
// auf der Konsole ausgegeben werden


// Lambda Funktionen:
// Alternative zu anonymen Funktionen
// Anonyme Funktionen sind ohne Identifier

//Anonyme Funktion:
let sum = function (numOne, numTwo) {
    return numOne + numTwo;
};

// Pfeilfunktion (Lambda)
let quadruple = (a) => a * 4;

// Normale Funktion
function vervierfachen(a) {
    return a * 4;
}

// Mehrzeiliger Lambda
let mehrzeilig = (a, b) => {
    a *= 2;
    b *= 2;
    return a * b;
}

/**
 * Schreibe eine Lambda Funktion, die überprüft, ob eine gegebene Zahl eine Primzahl ist.
 * Eine Primzahl ist eine natürliche Zahl größer als 1, die nur durch 1 und sich selbst teilabr ist
 * 
 * 1. Verwende eine Lambda Funktion.
 * 2. Die Funktion soll eine Zahl als Parameter erhalten.
 * 3. Falls die Zahl eine Primzahl ist, soll die Funktion true zurückgeben, sonst false.
 * 4. Die Funktion sollte effizient sein und nicht alle Zahlen durchgehen (z.B. nur bis zur Quadratwurzel der Zahl prüfen)
 * 5. Rufe die Funktion mit verschiedenen Zahlen auf und gib das Ergebnis in der Konsole aus.
 **/