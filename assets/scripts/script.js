const quizBlock = document.getElementById("quiz-block");
const yourScore = document.getElementById("your-score");
const leaderBlock = document.getElementById("leader-block");
const leaderboard = document.getElementById("leaderboard");
const leaderForm = document.getElementById("leader-form");
const submitBtn = document.getElementById("submit-btn");
const time = document.getElementById("time");
const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start-btn");
const answerTimeBlock = document.getElementById("answer-time-block");
const questionOne = document.getElementById("question-one");
const questionBlock = document.querySelectorAll(".question-block");
const answerBtns = document.querySelectorAll(".answer-btn");
const answerStatus = document.getElementById("answer-status");
const viewHighScores = document.getElementById("view-highscores");
const playAgainBtn = document.getElementById("play-again");

const leaders = {};
const initialTime = 60;
let timeLeft = initialTime;
let score = 0;

let currentQuestion = 0;

for (var j = 0; j < questionBlock.length; j++) {
    currentQuestion = questionBlock[j];
}

// Timer Function
function startTimer(event) {
    let quizTimer = setInterval(function () {
        if (timeLeft <= 1) {
            clearInterval(quizTimer);
            // Trigger show leaderboard
            showLeaderboard();
        }
        timeLeft -= 1;
        timeDisplay.innerText = timeLeft;
    }, 1000);
}

// Display Highscores & Return to Start
function displayHighScores(event) {
    // hide start quiz
    quizBlock.classList.add("hidden");
    // display highscores
    leaderBlock.classList.remove("hidden");
    // hide your score
    yourScore.setAttribute("style", "display: none;");
    // hide leader form
    leaderForm.setAttribute("style", "display: none;");
    playAgainBtn.innerText = "Give It A Go";
}

// Return to start
function returnToStart(event) {
    // display start quiz
    quizBlock.classList.remove("hidden");
    // hide highscores
    leaderBlock.classList.add("hidden");
}

// Show leaderboard with input & score
function showLeaderboard() {
    questionOne.classList.add("hidden");
    answerTimeBlock.classList.add("hidden");
    leaderBlock.classList.remove("hidden");
    yourScore.childNodes[1].innerText = score;
    timeLeft = initialTime;
    answerStatus.innerText = "";
}

// Submit name to leaderboard
function submitScore(event) {
    let name = document.getElementById("leader-input").value;
    leaders.name = name;
    leaders.score = score;
    let newLeaderNode = document.createElement("li");
    newLeaderNode.innerText = leaders.name + " - " + leaders.score;
    leaderboard.appendChild(newLeaderNode);
    // save to local storage
    localStorage.setItem("leaders", JSON.stringify(leaders));
}

// Display Questions
function displayQuestions(event) {
    // start timer
    startTimer();
    // hide start quiz
    quizBlock.classList.add("hidden");
    // display answer block
    answerTimeBlock.classList.remove("hidden");
    // hide highscore link
    viewHighScores.classList.add("hidden")
    // display question block
    questionOne.classList.remove("hidden")

}

// Determine answer and adjust score & time
function displayAnswer(event) {
    let correctAnswer = event.target.getAttribute("data-answer");

    if (correctAnswer === "correct") {
        answerStatus.textContent = "Correct!";
        score = score + 10;
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


// Global event listeners
submitBtn.addEventListener("click", submitScore);
playAgainBtn.addEventListener("click", returnToStart);
viewHighScores.addEventListener("click", displayHighScores);
startBtn.addEventListener("click", displayQuestions);

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
