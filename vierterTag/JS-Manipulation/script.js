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

// --- Elementauswahl ---
const toggleModeBtn = document.getElementById("toggleModeBtn");
const changeTextBtn = document.getElementById("changeTextBtn");
const changeBoxColorBtn = document.getElementById("changeBoxColorBtn");
const infoText = document.getElementById("infoText");
const boxes = document.querySelectorAll(".box");
const colorSchemeSelect = document.getElementById("colorScheme");
const lightImg = document.getElementById("lightImg");
const darkImg = document.getElementById("darkImg");

// --- Soundeffekt Bonus (optional) ---
const darkModeSound = new Audio("C:/HTML/HTML-KFD/vierterTag/JS-Manipulation/button-09a.wav");

// --- Dark Mode umschalten ---
toggleModeBtn.addEventListener("click", function () {
    if (document.body.classList.contains("dark-mode")) {
        // Wechsel zu Light Mode
        document.body.classList.remove("dark-mode");
        toggleModeBtn.textContent = "Dark Mode aktivieren";
        // Bilder umschalten: Light-Bild anzeigen, Dark-Bild ausblenden
        lightImg.classList.remove("hidden");
        darkImg.classList.add("hidden");
    } else {
        // Wechsel zu Dark Mode
        document.body.classList.add("dark-mode");
        toggleModeBtn.textContent = "Light Mode aktivieren";
        // Bonus: Soundeffekt abspielen
        darkModeSound.play();
        // Bilder umschalten: Dark-Bild anzeigen, Light-Bild ausblenden
        darkImg.classList.remove("hidden");
        lightImg.classList.add("hidden");
    }
});

// --- Text ändern ---
changeTextBtn.addEventListener("click", function () {
    if (infoText.textContent === "Dies ist ein Beispieltext. Klicke den Button, um ihn zu ändern.") {
        infoText.textContent = "Der Text wurde erfolgreich geändert!";
    } else {
        infoText.textContent = "Dies ist ein Beispieltext. Klicke den Button, um ihn zu ändern.";
    }
});

// --- Box-Farben zufällig ändern ---
changeBoxColorBtn.addEventListener("click", function () {
    boxes.forEach(box => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        box.style.backgroundColor = randomColor;
    });
});

// --- Bonus: Dropdown-Menü für Farbschemata ---
// Beim Ändern des Dropdowns wird das Farbschema angepasst.
colorSchemeSelect.addEventListener("change", function () {
    // Entferne zuerst alle Zusatzklassen (Blue/Green) vom Body
    document.body.classList.remove("blue-scheme", "green-scheme");
    const selected = colorSchemeSelect.value;
    if (selected === "blue") {
        document.body.classList.add("blue-scheme");
    } else if (selected === "green") {
        document.body.classList.add("green-scheme");
    }
});