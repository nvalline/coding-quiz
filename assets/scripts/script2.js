const startBtn = document.getElementById('start-btn')
const startContainer = document.getElementById('start-container')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const answerTimeContainer = document.getElementById('answer-time-container')
const endScreenContainer = document.getElementById('end-screen-container')
const scoreElement = document.getElementById('your-score')
const timeDisplayElement = document.getElementById('time-display')
const submitBtn = document.getElementById('submit-btn')
const leaderboardContainer = document.getElementById('leaderboard-container')
const leaderName = document.getElementById('leader-input')
const playAgainBtn = document.getElementById('play-again')
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

const initialTime = 30

let score = 0

let currentQuestionIndex
let nextQuestion
let time = initialTime
let quizTimer

let leaders = []
console.log(leaders)
startBtn.addEventListener('click', startQuiz)

// start Quiz
function startQuiz() {
    startTimer()
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
    if (!currentQuestionIndex || time <= 1) {
        clearInterval(quizTimer)
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
    } else {
        // subtract time
        time = time - 10
    }

    nextQuestionIndex()
    showNextQuestion()
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

// Timer Function
function startTimer(event) {
    quizTimer = setInterval(function () {
        if (time <= 1) {
            clearInterval(quizTimer);
            // Trigger show end screen
            showEndScreen();
        }
        time -= 1;
        timeDisplayElement.innerText = time;
    }, 1000);
}

function showEndScreen() {
    questionContainer.classList.add('hide')
    answerTimeContainer.classList.add('hide')
    endScreenContainer.classList.remove('hide')
    scoreElement.innerText = score
    submitBtn.addEventListener('click', submitLeaderInfo)
}

function submitLeaderInfo(event) {
    event.preventDefault()
    let leaderText = leaderName.value.trim() + " - " + score
    if (leaderText === "") {
        return
    }
    leaders.push(leaderText)
    leaderName.value = ""
    console.log(leaders)
    showLeaderboard()
}

function showLeaderboard(event) {
    // event.preventDefault()
    // let leaderText = leaderName.value.trim() + " - " + score
    endScreenContainer.classList.add('hide')
    leaderboardContainer.classList.remove('hide')

    // restart game
    playAgainBtn.addEventListener('click', resetQuiz)
}

function resetQuiz() {
    leaderboardContainer.classList.add('hide')
    startContainer.classList.remove('hide')
    currentQuestionIndex = questions[0]
    nextQuestion = questions.indexOf(currentQuestionIndex)
}

// display first question & answers

// determine if correct

// advance to next question

// log score

// set timer

// after last question advance to input

// after input advance to leaderboard
