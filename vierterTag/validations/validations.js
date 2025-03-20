const passwordInp = document.querySelector("#password");

passwordInp.addEventListener("focus", function () {
    if (passwordInp.validity.valueMissing) {
        // Erlaubt es uns eine eigene Fehlermeldung zu schreiben
        // Solange diese kein leerer String ist, gilt die form als invalid
        passwordInp.setCustomValidity("Das Passwort ist leer!1");
        // Zeigt uns die Fehlermeldung an wenn das Input-Element ungültig ist
        passwordInp.reportValidity();
    } else {
        // Entfernen die Error-Message sobald das Input-Feld gültig ist
        passwordInp.setCustomValidity("");
    }
});

/**
 * Validity Props:
 *  patternMismatch - Inhalt stimmt nicht mit pattern überein
 *  tooLong - Inhalt ist zu lang
 *  tooShort - Inhalt ist zu kurz
 *  rangeOverflow - Wert höher als im max-Attribut
 *  rangeUnderflow - Wert niedriger als im min-Attribut
 *  typeMismatch - Wert ist nicht der richtige Typ, z.B. email ohne @
 *  valid - Gibt true zurück wenn alles gültig ist
 *  valueMissing - Wenn das Input-Element das Attribut required hat und das Feld leer ist
 */

// Uebung
// Erstellt ein eigenes Validity Prop (Passwort darf nicht kürzer als 8 Zeichen sein)