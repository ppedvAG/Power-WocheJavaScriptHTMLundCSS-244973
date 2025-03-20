/**
 * Beispiel: Nutzung der Array.forEach()-Methode
 *
 * Die foreach iteriert über alle Elemente eines Arrays und ruft
 * für jedes Element eine Callback-Funktion auf. Diese Funktion kann bis zu
 * drei Parameter empfangen:
 *
 * 1. element: Das aktuelle Element, über das iteriert wird (erforderlich)
 * 2. index: Der Index des aktuellen Elements (optional)
 * 3. array: Das gesamte Array, auf dem forEach() aufgerufen wurde (optional)
 *
 * Wichtige Hinweise:
 *  - Die forEach() Methode führt die Callback Funktion einmal für jedes Element aus.
 *  - Es gibt kein "break" oder "continue" wie in klassischen Schleifen.
 * Möchte man die Iteration vorzeitig abbrechen, muss man andere Methoden verwenden.
 */

// Beispiel 1: Ein Array von Zahlen
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((element, index, array) => {
    // Ausgabe des aktuellen Elements, seines Index und des gesamten Arrays
    console.log("Element: ", element, "\nIndex: ", index, "\nArray: ", array);
});

// Beispiel 2: Einfaches Iterieren über ein Array, wobei nur das aktuelle Element benötigt wird
// Hier wird die Callback-Funktion mit nur einem Parameter definiert.

numbers.forEach(element => {
    console.log("Das Element ist: ", element);
})

// Beispiel 3: Iteration über ein Array von Objekten
// Angenommen, wir haben ein Array von PersonenObjekten und wollen nur die Namen ausgeben.

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];

people.forEach(person => {
    // Greife auf die Eigenschaft "name" des aktuellen Objekts zu
    console.log("Name:", person.name);
})