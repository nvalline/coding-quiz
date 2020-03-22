const quizBlock = document.getElementById("quiz-block");
const leaderBlock = document.getElementById("leader-block");
const time = document.getElementById("time");
const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start-btn");
const answerTimeBlock = document.getElementById("answer-time-block");
const questionOne = document.getElementById("question-one");
const questionBlock = document.querySelectorAll(".question-block");
const answerBtns = document.getElementsByClassName("answer-btn");

let timeLeft = 11;

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
    questionOne.classList.remove("hidden");
    // start timer
    startTimer();
    // cycle through questions
}

function displayAnswer(event) {
    console.log("answer button clicked")
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