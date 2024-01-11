export let radios = {
    radio5: document.querySelector("#radioRound5"),
    radio10: document.querySelector("#radioRound10"),
    radio15: document.querySelector("#radioRound15"),
    radio20: document.querySelector("#radioRound20"),
    arrRounds: 0
}

export let output = {
    spanResultMe: document.querySelector("#spanResultMe"),
    spanResultComp: document.querySelector("#spanResultComp"),
    outputText: document.querySelector("#outputMove"),
}

export let variables = {
    
    // Auswahlbereich festlegen
    rock: document.querySelector("#imgRock"),
    paper: document.querySelector("#imgPaper"),
    scissor: document.querySelector("#imgScissor"),

    // Restart deklarieren
    restart: document.querySelector("#buttonRestart"),
    
    // Auswahlvariablen deklarieren
    choiceMe: null,
    choiceComp: null, // Auswahlvariable Computer

    // Punkte Variablen deklariert
    pointMe: 0,
    pointComp: 0,

    // Rundenzähler
    roundChoice: 0,
    roundPlayed: 0,

}