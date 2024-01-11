import { radios, output, variables } from './variables.js'
import { functions } from './functions.js'

console.log(functions.compChoiceRandom());
console.log(functions.getPlayRounds());

function playGame(e) {
    functions.getPlayRounds()
    const playerChoice = e.target.parentElement.id.slice(3)
    const compChoice = functions.compChoiceRandom()

    console.log("ME: ", playerChoice, "Comp: ", compChoice);
    console.log("Roundcheck: ", functions.roundCheck());
    console.log("check");
    if (functions.roundCheck() == true) {
        if (playerChoice == compChoice) {
            output.outputText.innerHTML = "Unentschieden!! Bitte nochmal spielen"
        } else if (playerChoice == "Rock" && compChoice == "Paper") {
            output.outputText.innerHTML = `${compChoice} beats ${playerChoice}. Comp win!`
            functions.countUp("Comp")
        } else if (playerChoice == "Paper" && compChoice == "Rock") {
            output.outputText.innerHTML = `${playerChoice} beats ${compChoice}. You win!`
            functions.countUp("Me")
        } else if (playerChoice == "Scissor" && compChoice == "Rock") {
            output.outputText.innerHTML = `${compChoice} beats ${playerChoice}. Comp win!`
            functions.countUp("Comp")
        } else if (playerChoice == "Rock" && compChoice == "Scissor") {
            output.outputText.innerHTML = `${playerChoice} beats ${compChoice}. You win!`
            functions.countUp("Me")
        } else if (playerChoice == "Paper" && compChoice == "Scissor") {
            output.outputText.innerHTML = `${compChoice} beats ${playerChoice}. Comp win!`
            functions.countUp("Comp")
        } else if (playerChoice == "Scissor" && compChoice == "Paper") {
            output.outputText.innerHTML = `${playerChoice} beats ${compChoice}. You win!`
            functions.countUp("Me")
        }
    } 
    if(functions.roundCheck() == false) {
        console.log("check abgelehnt");
        functions.postResult()
    }
}


functions.setInitialPoints()
// addEventListener()
variables.rock.addEventListener("click", playGame)
variables.paper.addEventListener("click", playGame)
variables.scissor.addEventListener("click", playGame)
variables.restart.addEventListener("click", () => functions.restart())
/*
radios.arrRounds.forEach(el => {
    el.addEventListener("click", functions.restart())
});
*/