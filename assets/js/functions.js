import { variables, output, radios } from "./variables.js";

export const functions = {
    compChoiceRandom: () => {
    const numb = Math.ceil(Math.random()*3)

    switch(numb) {
        case 1:
            return "Rock"
        case 2: 
            return "Paper"
        case 3:
            return "Scissor"
    }
},
    getPlayRounds: () => {
        let roundChoice
        const arrRounds = Array.from(document.getElementsByName("playRounds")) 
        // console.log(arrRounds);
        arrRounds.forEach(el => {
            el.checked
            ? roundChoice = el.value
            : null
        });
        // console.log(roundChoice);
        return roundChoice
    },
    setInitialPoints: () => {
        output.spanResultMe.innerHTML = 0
        output.spanResultComp.innerHTML = 0
    }
}