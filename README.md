Schere Stein Papier Spiel

Dieses Projekt realisiert das klassische Schere-Stein-Papier-Spiel und verwendet HTML, CSS und JavaScript, um eine interaktive Webanwendung zu erstellen.

https://renehellmich.github.io/rock-paper-scissors/

Projektstruktur

Das Projekt ist in mehrere Dateien unterteilt:

HTML (index.html)

Die index.html-Datei bildet das Grundgerüst der Webseite. Hier werden die verschiedenen Abschnitte für die Rundenauswahl, die Anzeige der Spielergebnisse und den eigentlichen Spielbereich definiert. Zudem wird die notwendige Verlinkung zu den CSS- und JavaScript-Dateien hergestellt.

JavaScript (main.js und functions.js)

main.js
Diese Datei dient als Bindeglied zwischen den HTML-Elementen und den Funktionen aus functions.js. In main.js werden EventListener für Benutzerinteraktionen festgelegt, insbesondere für die Auswahl von Stein, Papier oder Schere, sowie den Neustart-Button. Zudem erfolgt die Steuerung des Spielablaufs, indem Funktionen aus functions.js aufgerufen werden.

functions.js

In dieser Datei sind alle Funktionen enthalten, die für die Spiellogik benötigt werden:

compChoiceRandom: 
Generiert eine zufällige Auswahl für den Computer aus den Optionen "Rock", "Paper" oder "Scissor".

getPlayRounds: Ermittelt die ausgewählte Anzahl der Runden durch den Benutzer und aktualisiert die entsprechende Variable.

setInitialPoints: Setzt die Punkte für Spieler und Computer zu Beginn des Spiels und aktualisiert die Anzeige.

roundCheck: Überprüft, ob noch Runden übrig sind.

countUp: Erhöht die Punkte für den Spieler oder den Computer basierend auf dem übergebenen Argument ("Me" für Spieler, "Comp" für Computer).

postResult: Zeigt das Endergebnis des Spiels basierend auf den Punkten an.

restart: Setzt die Punkte, die Anzahl der gespielten Runden und die Anzeige zurück, um ein neues Spiel zu starten.

CSS (style.css)

Die style.css-Datei definiert das Erscheinungsbild der Webseite. Hier werden verschiedene Stile für den Body, die Rundenauswahl, die Ergebnisausgabe und den Spielbereich festgelegt, um eine ansprechende Benutzeroberfläche zu gestalten.

Verwendung

Klone das Repository: git clone <Repository-URL>
Öffne die index.html-Datei in einem Webbrowser.
Wähle die Anzahl der Runden aus und spiele gegen den Computer.

Lizenz

Nicht lizensiert. Bitte nicht klauen :)
