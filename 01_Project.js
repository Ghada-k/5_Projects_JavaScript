const prompt = require("prompt-sync")()
const name = prompt("What is your name?")
console.log("Hello" ,name+ ", Welcome to our game!")

const shouldWePlay = prompt('Do you want to play? ')

if (shouldWePlay.toLowerCase() === "yes") {
    console.log("Let's play!")
    const leftOrRight = prompt("You enter a maze, do you want to go left or right?")
    if (leftOrRight.toLowerCase() === "left") {
        console.log("You go left and see a bridge...")
        const cross = prompt("Do you want to cross the bridge?")
        if (cross.toLowerCase() === "yes") {
            console.log("You cross but the bridge was weak and broke and you fell. You lost...")
            } else {
                console.log("Good choice... YOu win")
            }
    }else{
        console.log("You go right and fall off a cliff...")
    }
}else if (shouldWePlay.toLowerCase() === "no") {
    console.log("Okay, maybe next time!")
} else {
    console.log("Invalid input!")
}