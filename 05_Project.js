const prompt = require("prompt-sync")()
const fs = require("fs")

function loadQuestions(){
    try{
        const data = fs.readFileSync('questions.json', 'utf8')
        const questions = JSON.parse(data).questions
        return questions
    } catch(e){
        console.log("Error occured loading file", e)
        return []
    }
        
}

function getRandomQuestions(questions, numQuestions){
    if (numQuestions > questions.length){
        numQuestions = questions.length
    }

    const shuffled = questions.sort(()=> {
        return Math.random() - 0.5
    })
    return shuffled.slice(0, numQuestions)
}

function askQuestion(question){
    console.log(question.question)
    for (let i = 0 ; i < question.options.length; i++){
        console.log(`${i+1}. ${question.options[i]}`)
    }
    const choice = parseInt(prompt("Enter the number of your answer: "))
    if (isNaN(choice)|| choice<1 || choice>question.options.length){
        console.log("Invalid choice")
        return false
    }
    const choiceValue = question.options[choice - 1]
    return choiceValue === question.answer


}

const numQuestions = parseInt(prompt("Enter the number of questions: "))
const questions = loadQuestions()
const randomQuestions = getRandomQuestions(questions, numQuestions)

let correct = 0;
const startTime = Date.now()

for (let question of randomQuestions){
    console.log()
    if (askQuestion(question)) correct++
}

const totalTime = Date.now() - startTime
console.log("Correct: ",correct)
console.log("Time: ",Math.round(totalTime / 1000), "S")
console.log("Score: ", Math.round((correct / numQuestions) * 100)  + "%")

