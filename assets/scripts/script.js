const quizBlock = document.getElementById("quiz-block");
const leaderBlock = document.getElementById("leader-block");
const time = document.getElementById("time");
const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start-btn");
const answerTimeBlock = document.getElementById("answer-time-block");
const questionOne = document.getElementById("question-one");
const questionBlock = document.querySelectorAll(".question-block");
const answerBtns = document.querySelectorAll(".answer-btn");
const answerStatus = document.getElementById("answer-status");

let currentQuestion = questionBlock[0];
let newQuestion = 0;

let score = 0;
let timeLeft = 60;


// Timer Function
function startTimer(event) {
    let quizTimer = setInterval(function () {
        if (timeLeft <= 1) {
            clearInterval(quizTimer);
            console.log("Times Up")
        }
        timeLeft -= 1;
        timeDisplay.innerText = timeLeft;
    }, 1000);
}

// Display Questions
function displayQuestions(event) {
    // hide start quiz
    quizBlock.classList.add("hidden");
    // display answer block
    answerTimeBlock.classList.remove("hidden");
    // display question block
    currentQuestion.classList.remove("hidden");
    // start timer
    startTimer();
    // cycle through questions
}

// Update Current Question
function currentQ() {
    console.log(currentQuestion)
    for (var i = 0; i < questionBlock.length; i++) {
        newQuestion = questionBlock[i + 1];
        break;
    }

    console.log(newQuestion)
}

// Determine answer and adjust score & time
function displayAnswer(event) {
    let correctAnswer = event.target.getAttribute("data-answer");

    if (correctAnswer === "correct") {
        answerStatus.textContent = "Correct!";
        score = score + 10;
        currentQ();
    } else {
        answerStatus.textContent = "Wrong...";
        if (timeLeft > 10) {
            timeLeft = timeLeft - 10;
        } else {
            timeLeft = 1;
        }
    }
}

// Event listener for Answer Buttons
for (var i = 0; i < answerBtns.length; i++) {
    answerBtns[i].addEventListener("click", displayAnswer, false);
}

// start clicked => display Q1, start timer

// if correct clicked => display Correct
// if correct add to score
// if wrong clicked => display Wrong
// if wrong subtract time
// hide Q1 => display Q2
// repeat

// leaderboard hides divider & answer block
// after Q5 display leaderboard with input
// after input submitted hide input

// if time = 0, game ends and displays leaderboard

// if View Highscores clicked display leaderboard w/o input => Play Again button displays Take Quiz

// if Play Again clicked return to Start Quiz

startBtn.addEventListener("click", displayQuestions);