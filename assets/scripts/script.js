const startBtn = document.getElementById('start-btn')
const startContainer = document.getElementById('start-container')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const answerTimeContainer = document.getElementById('answer-time-container')
const endScreenContainer = document.getElementById('end-screen-container')
const scoreElement = document.getElementById('your-score')
const answerStatusElement = document.getElementById('answer-status')
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

// Event listener to start quiz
startBtn.addEventListener('click', startQuiz)
// Event listener to display leaderboard from header link
viewHighscoresElement.addEventListener('click', leaderboardShortcut)

// start Quiz function
function startQuiz() {
    startTimer()
    // hide/view elements
    startContainer.classList.add('hide')
    questionContainer.classList.remove('hide')
    answerTimeContainer.classList.remove('hide')
    // starting index of questions array
    currentQuestionIndex = questions[0]
    showNextQuestion()
}

// advance to next index in questions array
function nextQuestionIndex() {
    nextQuestion = questions.indexOf(currentQuestionIndex)
    nextQuestion++
    currentQuestionIndex = questions[nextQuestion]
}

function showNextQuestion() {
    resetAnswerState()
    // clear answer status element after each question
    answerStatusElement.innerText = ""
    // display next question or end screen
    if (!currentQuestionIndex || time <= 1) {
        clearInterval(quizTimer)
        showEndScreen()
    } else {
        showQuestion(currentQuestionIndex)
    }
}

function showQuestion(question) {
    // print question text
    questionElement.innerText = question.question
    // print answer text
    question.answers.forEach(showAnswerButtons)
}

function showAnswerButtons(answer) {
    // write answer buttons
    let button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }

    // listner for answer buttons
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
}

function selectAnswer(event) {
    // answer buttons reactions
    let selectedButton = event.target
    if (selectedButton.dataset.correct) {
        answerStatusElement.textContent = "Correct!"
        score = score + 10
    } else {
        // subtract time
        answerStatusElement.textContent = "Wrong..."
        time = time - 10
    }

    // delay next question by 1 second
    setTimeout(function () {
        nextQuestionIndex()
        showNextQuestion()
    }, 1000)
}

function resetAnswerState() {
    // remove previous answer buttons
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
    // hide/view elements
    questionContainer.classList.add('hide')
    answerTimeContainer.classList.add('hide')
    endScreenContainer.classList.remove('hide')

    // set final score
    if (time > 0) {
        finalScore = score + "." + time
    } else {
        finalScore = score
    }

    // print final score
    scoreElement.innerText = finalScore
    submitBtn.addEventListener('click', submitLeaderInfo)
}

function submitLeaderInfo(event) {
    event.preventDefault()
    // add leader name & score from end screen
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
    // hide/view elements
    endScreenContainer.classList.add('hide')
    leaderboardContainer.classList.remove('hide')
    // reset timer display
    timeDisplayElement.innerText = ""
    // print leaders to leaderboard
    leaders.forEach(showLeaders)

    // restart game
    playAgainBtn.addEventListener('click', resetQuiz)
}

function resetQuiz() {
    // hide/view elements
    leaderboardContainer.classList.add('hide')
    startContainer.classList.remove('hide')
    // reset variables to initial values
    currentQuestionIndex = questions[0]
    nextQuestion = questions.indexOf(currentQuestionIndex)
    score = 0
    finalScore = 0
    time = initialTime
}

function showLeaders(leader) {
    // write leaders elements
    let liElement = document.createElement('li')
    liElement.innerText = leader
    leaderboardList.appendChild(liElement)
}

function resetLeaderState() {
    // remove leaders elements
    while (leaderboardList.firstChild) {
        leaderboardList.removeChild(leaderboardList.firstChild)
    }
}

// view leaderboard from header link
function leaderboardShortcut() {
    startContainer.classList.add('hide')
    leaderboardContainer.classList.remove('hide')

    playAgainBtn.addEventListener('click', resetQuiz)
}
