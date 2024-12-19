const prompt = require("prompt-sync")()
const name = prompt("What is your name?")
console.log("Hello" ,name+ ", Welcome to our game!")

const shouldWePlay = prompt('Do you want to play? ')

if (shouldWePlay.toLowerCase() === "yes") {
    console.log("Let's play a game of Rock, Paper, Scissors!")
} else {
    console.log("Okay, maybe next time!")
}