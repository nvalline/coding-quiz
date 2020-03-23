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
const leaderboardList = document.getElementById('leaderboard-list')
const viewHighscoresElement = document.getElementById('view-highscores')
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
let finalScore

let leaders = []

startBtn.addEventListener('click', startQuiz)
viewHighscoresElement.addEventListener('click', leaderboardShortcut)

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
    resetAnswerState()
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

function resetAnswerState() {
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

    if (time > 0) {
        finalScore = score + "." + time
    } else {
        finalScore = score
    }

    scoreElement.innerText = finalScore
    submitBtn.addEventListener('click', submitLeaderInfo)
}

function submitLeaderInfo(event) {
    event.preventDefault()
    let leaderText = leaderName.value.trim()
    if (leaderText === "") {
        return
    }
    leaderText = leaderText + " - " + finalScore
    leaders.push(leaderText)
    leaderName.value = ""
    showLeaderboard()
}

function showLeaderboard(event) {
    resetLeaderState()
    endScreenContainer.classList.add('hide')
    leaderboardContainer.classList.remove('hide')
    timeDisplayElement.innerText = ""
    leaders.forEach(showLeaders)

    let clearButton
    if (leaders.length > 0) {
        clearButton = document.createElement('button')
        clearButton.innerText = "Clear Scores"
        clearButton.classList.add('btn')
        leaderboardContainer.appendChild(clearButton)
    }

    // clear scores
    clearButton.addEventListener('click', clearScores)

    // restart game
    playAgainBtn.addEventListener('click', resetQuiz)
}

function clearScores() {
    resetLeaderState()
    leaders = []
    let resetLiElement = document.createElement('li')
    resetLiElement.innerText = "No Highscores..."
    leaderboardList.appendChild(resetLiElement)
}

function resetQuiz() {
    leaderboardContainer.classList.add('hide')
    startContainer.classList.remove('hide')
    leaderboardContainer.removeChild(leaderboardContainer.lastElementChild)
    currentQuestionIndex = questions[0]
    nextQuestion = questions.indexOf(currentQuestionIndex)
    score = 0
    finalScore = 0
    time = initialTime
}

function showLeaders(leader) {
    let liElement = document.createElement('li')
    liElement.innerText = leader
    leaderboardList.appendChild(liElement)
}

function resetLeaderState() {
    while (leaderboardList.firstChild) {
        leaderboardList.removeChild(leaderboardList.firstChild)
    }
}

function leaderboardShortcut() {
    startContainer.classList.add('hide')
    leaderboardContainer.classList.remove('hide')

    playAgainBtn.addEventListener('click', resetQuiz)
}
// display first question & answers

// determine if correct

// advance to next question

// log score

// set timer

// after last question advance to input

// after input advance to leaderboard
