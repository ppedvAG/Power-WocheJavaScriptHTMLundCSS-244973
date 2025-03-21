/**
 * Erklärung von "this" in JavaScript:
 * 
 * 1. in globalen Funktionen: 
 *      - "this" verweist auf das globale Objekt (im Browser: window).
 * 
 * 2. in Methoden von Objekten:
 *      - "this" verweist auf das Objekt, das die Methode aufruft.
 * 
 * 3. in Konstruktorfunktion (mit "new"):
 *      - "this" verweist auf das neu erstellte Objekt
 * 
 * 4. in Arrow-Funktionen:
 *      - Arrow-Funktion besitzen kein eigenes "this".
 *        Sie übernehmen "this" aus dem umgebenden Kontext
 */

// Beispiel 1: Globaler Kontext
function globalFunction() {
    console.log("Globaler Kontext, this: ", this); // Im Browser: window
}
globalFunction();

// Beispiel 2: Methode in einem Objekt
const person = {
    name: "Alice",
    // Hier referenziert "this" das Objekt 'person'
    sayHello: function () {
        console.log("Hallo, mein Name ist " + this.name);
    }
};
person.sayHello();

// Beispiel 3: Konstruktorfunktion
function Car(brand, model) {
    // In einer Konstruktorfunktion referenziert "this" das neu erstellte Objekt
    this.brand = brand;
    this.model = model;
    this.describe = function () {
        console.log("Das Auto ist ein " + this.brand + " " + this.model);
    };
}
const myCar = new Car("Toyota", "Corolla");
myCar.describe();

// Beispiel 4: Arrow-Funktion
const arrowFunctionExample = () => {
    // Arrow-Funktionen übernehmen "this" aus ihrem umgebenden Kontext
    // In diesem Fall ist das der globale Kontext (window),
    // sofern keine andere übergeordnete Funktion existiert
    console.log("Arrow-Funktion, this: ", this);
};
arrowFunctionExample();

// Beispiel 5: Vergleich innerhalb eines Objekts
const objExample = {
    value: 42,
    // Normale Funktion: "this" bezieht sich auf das Objekt
    normalMethod: function () {
        console.log("Normale Methode, this.value: ", this.value);
    },
    // Arrow-Funktion: "this" wird aus dem umgebenden Kontext übernommen,
    // hier ist das wahrscheinlich der globale Kontext, daher undefined
    arrowMethod: () => {
        console.log("Arrow-Methode, this.value:", this.value);
    }
};
objExample.normalMethod(); // Ausgabe: 42
objExample.arrowMethod(); // Ausgabe: undefined (wenn kein globales value definiert ist)

// Beispiel 6: Arrow-Funktion in einem Callback
const numbers = [1, 2, 3];

// Normale Funktion als Callback: "this" kann optional übergeben werden (hier als Objekt mit context)
numbers.forEach(function (num) {
    console.log("Normale Funktion im callback, num:", num, "this:", this);
}, { custom: "Wert" });

// Arrow-Funktion als Callback: "this" wird aus dem umgebenden Kontext übernommen
numbers.forEach(num => {
    console.log("Arrow-Funktion im Callback, num:", num, "this:", this);
});


// Übungsaufgabe

/**
 * 1. Erstelle ein Objekt "student" mit folgenden Eigenschaften:
 *      - name z.B. "Eva"
 *      - note z.B. 1.3
 *      - eine Methode "zeigeInfo", die "Der Studen .. hat die Note .." in der Konsole ausgeben
 *      - eine Methode "verzögerteInfo", die mit setTimeout (normale Funktion) nach 1 sek auf der Konsole ausgibt
 *      - eine Methode "verzögerteInfoArrow", die mit setTimeout (arrow Funktion) nach 1 sek auf der Konsole ausgibt
 * 
 * 2. Erstelle ein "student"-Objekt und rufe alle Methoden auf, um den Unterschied im "this"-Verhalten zu beobachten
 */