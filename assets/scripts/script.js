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
const nameInput = document.getElementById("name-input");
const playAgainBtn = document.getElementById("play-again");

const leaders = {};
const initialTime = 60;
let timeLeft = initialTime;
let score = 0;

let currentQuestion = 0;

// Display Questions
function displayQuestions(event) {
    // start timer
    startTimer();
    // hide start quiz
    quizBlock.classList.add("hide");
    // display answer block
    answerTimeBlock.classList.remove("hide");
    // hide highscore link
    viewHighScores.classList.add("hide")
    // display question block
    questionOne.classList.remove("hide")

}

for (var j = 0; j < questionBlock.length; j++) {
    currentQuestion = questionBlock[j];
}


// Display Highscores & Return to Start
function displayHighScores(event) {
    // hide start quiz
    quizBlock.classList.add("hide");
    // display highscores
    leaderBlock.classList.remove("hide");
    playAgainBtn.innerText = "Take Quiz";
}

// Return to start
function returnToStart(event) {
    // display start quiz
    quizBlock.classList.remove("hide");
    // hide highscores
    leaderBlock.classList.add("hide");
}

// Show leaderboard with input & score
function nameSubmit() {
    questionOne.classList.add("hide");
    answerTimeBlock.classList.add("hide");
    nameInput.classList.remove("hide");
    yourScore.childNodes[1].innerText = score;
    timeLeft = initialTime;
    answerStatus.innerText = "";
}

// Submit name to leaderboard
function submitScore(event) {
    submitBtn.preventDefault();
    let name = document.getElementById("leader-input").value;
    leaders.name = name;
    leaders.score = score;
    let newLeaderNode = document.createElement("li");
    newLeaderNode.innerText = leaders.name + " - " + leaders.score;
    leaderboard.appendChild(newLeaderNode);
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

// Timer Function
function startTimer(event) {
    let quizTimer = setInterval(function () {
        if (timeLeft <= 1) {
            clearInterval(quizTimer);
            // Trigger show leaderboard
            nameSubmit();
        }
        timeLeft -= 1;
        timeDisplay.innerText = timeLeft;
    }, 1000);
}

// save to local storage
localStorage.setItem("leaders", JSON.stringify(leaders));

// Event listener for Answer Buttons
for (var i = 0; i < answerBtns.length; i++) {
    answerBtns[i].addEventListener("click", displayAnswer, false);
}

// Global event listeners
startBtn.addEventListener("click", displayQuestions);
playAgainBtn.addEventListener("click", returnToStart);
viewHighScores.addEventListener("click", displayHighScores);
submitBtn.addEventListener("click", submitScore);

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
