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
        const arrRounds = Array.from(document.getElementsByName("playRounds")) 
        // console.log(arrRounds);
        arrRounds.forEach(el => {
            el.checked
            ? variables.roundChoice = Number(el.value)
            : null
        });
        // console.log(roundChoice);
    },
    setInitialPoints: () => {
        output.spanResultMe.innerHTML = variables.pointMe
        output.spanResultComp.innerHTML = variables.pointComp
    },
    roundCheck: () => {
        console.log("roundPlayed: ", variables.roundPlayed, "roundChoice: ", variables.roundChoice);
        return variables.roundPlayed <= variables.roundChoice
    },
    countUp: (player) => {
        switch(player) {
            case "Comp":
                variables.pointComp++
                output.spanResultComp.innerHTML = variables.pointComp
                break;
            case "Me":
                variables.pointMe++
                output.spanResultMe.innerHTML = variables.pointMe
                break;
        }
        variables.roundPlayed++
    }
}