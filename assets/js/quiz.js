
const questions = []

fetch(
    '/questions.json'
)
    .then((res) => {
        return res.json();
    })
    .then((currentQuestion) => {
        questions = currentQuestion.results.map((question) => {
            let currentQuestion = {
                question: question.question,
            };



//variables to select elements

const playButton = document.getElementById('play-btn');
const homeSection = document.getElementById('home-section');
const quizSection = document.getElementById('quiz-game-section');
const exitGameButton = document.getElementById('exit-game');
const exitYesBtn = document.getElementById('exit-yes');
const exitNoBtn = document.getElementById('exit-no');
const question = document.getElementById('question')
const answers = Array.from(document.querySelectorAll('.ans-btn'));
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progress-bar-full');
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('save-score');
const finalScore = document.getElementById('final-score');
const playAgainBtn = document.getElementById('play-again');
const returnHomeBtn = document.getElementById('return-home');
const restartYesBtn = document.getElementById('restart-yes');
const restartNoBtn = document.getElementById('restart-no');
const clearBtn = document.getElementById('clear-scores');
const clearYesBtn = document.getElementById('cs-yes');
const clearNoBtn = document.getElementById('cs-no');
const highScoresList = document.getElementById('high-scores-list');

//variables for quiz game

let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let availableQuestions = [];
let score = 0;
const SCORE_POINTS = 10;
const MAX_QUESTIONS = 20;

//function to render new question

function renderQuestion() {
    //if function to check if the game has ended
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        $("#finish-quiz-modal").modal({
            backdrop: 'static',
            keyboard: false
        });
        return $("#finish-quiz-modal").modal("show");
    }

    //questions counter increases which updates the progress bar and text
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    //variable created to randomise the questions
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    //function to assign answer boxes with relevant options that correspond to the correct question
    answers.forEach(ans => {
        const number = ans.dataset['number'];
        ans.innerText = currentQuestion['ans' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

//function to check which answer the user has chose
answers.forEach(ans => {
    ans.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        //check if answer is correct or not and set the class
        let classToApply = selectedAnswer == currentQuestion.correct ? 'btn-correct' : 'btn-incorrect';

        //if correct answer chosen then increase score
        if (classToApply === 'btn-correct') {
            incrementScore(SCORE_POINTS);
        }

        //set class to change colour depending on aswer chosen
        selectedChoice.classList.add(classToApply);
        selectedChoice.classList.remove('ans-btn');

        //function to reset the state and render new question
        setTimeout(() => {
            selectedChoice.classList.remove(classToApply);
            selectedChoice.classList.add('ans-btn');
            renderQuestion();

        }, 800);
    });
});

//function to update the user score
incrementScore = num => {
    score += num;
    scoreText.innerText = score;

    finalScore.innerText = score;
};

//end quiz modal section

// const userScore = localStorage.getItem('userScore');
const highScores = (JSON.parse(localStorage.getItem('highScores')) || []);
const MAX_HIGH_SCORES = 10;

//event listener to allow user to click the save button once username entered
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

//function to save the high score
saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: finalScore.innerText,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(10);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');
};

//replay quiz game without saving score

//event listener when user clicks the pay again button
playAgainBtn.addEventListener('click', () => {
    $("#play-again-modal").modal({
        backdrop: 'static',
        keyboard: false
    });
    $("#play-again-modal").modal("show");
    $("#finish-quiz-modal").modal("hide");
});

//event listener if user select yes button
restartYesBtn.addEventListener('click', () => {
    $("#finish-quiz-modal").modal("hide");
    scoreText.innerText = 0;
    startQuiz();
});

//event listener if user select no button
restartNoBtn.addEventListener('click', () => {
    $("#finish-quiz-modal").modal("show");
});


/* exit quiz game without finishing or 
return to home page without saving score after quiz game is finished */

//variable created to use in if function when user selects 'No'
let clickreturnHomeBtn;

//event listener when user clicks the quit game button
exitGameButton.addEventListener('click', () => {
    $("#exit-modal").modal({
        backdrop: 'static',
        keyboard: false
    });
    $("#exit-modal").modal("show");
});

//event listener when user clicks the return home button
returnHomeBtn.addEventListener('click', () => {
    $("#exit-modal").modal({
        backdrop: 'static',
        keyboard: false
    });
    $("#exit-modal").modal("show");
    $("#finish-quiz-modal").modal("hide");
    clickreturnHomeBtn = true;
});

//event listener if user select yes button
exitYesBtn.addEventListener('click', () => {
    window.location.assign('index.html');
});

//event listener if user select no button
//additional if statement added depending which button user has clicked
exitNoBtn.addEventListener('click', () => {
    if (clickreturnHomeBtn === true) {
        $("#finish-quiz-modal").modal("show");
    } else {
        $("#exit-modal").modal("hide");
    }
});

//highscores modal section

//highscores added to the table if user saves the score
highScoresList.innerHTML = highScores.map(score => {
        return `<tr>
    <td>${score.name}</td>
    <td>${score.score}</td>
    </tr>`;
    })
    .join('');

//clear highscores modal section

//event listener once user selects clear score button
clearBtn.addEventListener('click', () => {
    $("#clear-modal").modal({
        backdrop: 'static',
        keyboard: false
    });
    $("#clear-modal").modal("show");
    $("#highscores-modal").modal("hide");
});

//event listener once user selects yes to clear score
clearYesBtn.addEventListener('click', () => {
    localStorage.clear('highScores');
    highScoresList.style.display = "none";
    $("#highscores-modal").modal("show");
});

//event listener once user selects no to clear score
clearNoBtn.addEventListener('click', () => {
    $("#highscores-modal").modal("show");
});

//event listener to start the quiz game once clicked
playButton.addEventListener('click', startQuiz);

//function to start the quiz game

function startQuiz() {

    homeSection.classList.add('hide');
    quizSection.classList.remove('hide');
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    renderQuestion();

}
