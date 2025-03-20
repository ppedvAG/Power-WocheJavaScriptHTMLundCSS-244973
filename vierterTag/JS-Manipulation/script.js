// 1. Text ändern
document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.getElementById("text").innerText = "Der Text wurde mit JavaScript geändert!";
});

// 2. CSS-Klasse umschalten
document.getElementById("toggleClassBtn").addEventListener("click", function () {
    document.getElementById("box").classList.toggle("highlight");
});


/*
    Erstelle genau 3 Buttons:
        1. Dark Mode umschalten (Wechselt zwischen Hell/Dunkel-Modus)
        2. Text ändern (Ändert den inhalt eines Paragraphen)
        3. Box-Farben zufällig ändern (Ändert die Hintergrundfarbe aller .box-Elemente)
    
    Erstelle 2 Formulare:
        1. Ein Login Formular mit E-Mail & Passwort
        2. Ein Kontaktformular mit Name, Nachricht und Absende Button
    
    Die Buttons und Formulare sollen sich bei Dark/White Mode visuell anpassen.
    Nutze eine If-Abfrage und eine Schleife, um mehrere Elemente gleichzeitig zu manipulieren.

    Füge 1-2 Copyright-lose Bilder hinzu.

    Bonus:
        Ein Dropdown Menü hinzufügen, um verschiedene Farbschemata auszuwählen
        Soundeffekt hinzufügen, wenn der Dark Mode aktiviert wird

*/