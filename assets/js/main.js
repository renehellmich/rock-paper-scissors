import {radios, output, variables} from './variables.js'
import { functions } from './functions.js'

console.log(functions.compChoiceRandom());
console.log(functions.getPlayRounds());

function playGame(e) {
    const playerChoice = e.target.parentElement.id.slice(3)
    const compChoice = functions.compChoiceRandom()

    console.log("ME: ", playerChoice, "Comp: ", compChoice);
}





functions.setInitialPoints()
// addEventListener()
variables.rock.addEventListener("click", playGame)
variables.paper.addEventListener("click", playGame)
variables.scissor.addEventListener("click", playGame)