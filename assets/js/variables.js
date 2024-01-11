export let radios = {
    radio5: document.querySelector("#radioRound5"),
    radio10: document.querySelector("#radioRound10"),
    radio15: document.querySelector("#radioRound15"),
    radio20: document.querySelector("#radioRound20")
}

export let output = {
    spanResultMe: document.querySelector("#spanResultMe"),
    spanResultComp: document.querySelector("#spanResultComp")
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

}