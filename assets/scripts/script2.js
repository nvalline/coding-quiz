const startBtn = document.getElementById('start-btn')
const startContainer = document.getElementById('start-container')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const answerTimeContainer = document.getElementById('answer-time-container')
const endScreenContainer = document.getElementById('end-screen-container')
const questions = [
    {
        question: "An ID that has been created in your CSS can be used __________ time(s) within you HTML document?",
        answers: [
            { text: "Four", correct: false },
            { text: "Three", correct: false },
            { text: "Two", correct: false },
            { text: "One", correct: true }
        ]
    },
    {
        question: "True or false? You should avoid coding inline styles within an HTML document whenever possible?",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Which of the following tags would allow you to input a line break in your HTML document correctly?",
        answers: [
            { text: "Br", correct: true },
            { text: "B", correct: false },
            { text: "Hr", correct: false },
            { text: "P", correct: false }
        ]
    },
    {
        question: "This section code holds the most of the page's information or content?",
        answers: [
            { text: "HTML", correct: false },
            { text: "BODY", correct: true },
            { text: "TITLE", correct: false },
            { text: "HEAD", correct: false }
        ]
    },
    {
        question: "A ______________ is a set of text or button hyperlinks that can be used to access pages in your web site?",
        answers: [
            { text: "Route Bar", correct: false },
            { text: "Map Bar", correct: false },
            { text: "Direction Bar", correct: false },
            { text: "Navigation Bar", correct: true }
        ]
    }
]

let currentQuestionIndex
let nextQuestion
let score = 0

startBtn.addEventListener('click', startQuiz)

// start Quiz
function startQuiz() {
    startContainer.classList.add('hide')
    questionContainer.classList.remove('hide')
    currentQuestionIndex = questions[0]
    answerTimeContainer.classList.remove('hide')
    showNextQuestion()
}

function nextQuestionIndex() {
    nextQuestion = questions.indexOf(currentQuestionIndex)
    nextQuestion++
    currentQuestionIndex = questions[nextQuestion]
}

function showNextQuestion() {
    resetState()
    if (!currentQuestionIndex) {
        console.log("Show input")
        showEndScreen()
    } else {
        showQuestion(currentQuestionIndex)
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(showAnswerButtons)
}

function showAnswerButtons(answer) {
    let button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
}

function selectAnswer(event) {
    let selectedButton = event.target
    if (selectedButton.dataset.correct) {
        score = score + 10
        console.log(score)
    } else {
        // subtract time
        console.log("Need to subtract time")
    }

    nextQuestionIndex()
    showNextQuestion()
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function showEndScreen() {
    questionContainer.classList.add('hide')
    answerTimeContainer.classList.add('hide')
    endScreenContainer.classList.remove('hide')
}
// display first question & answers

// determine if correct

// advance to next question

// log score

// set timer

// after last question advance to input

// after input advance to leaderboard
