

// Array with list of quiz questions
const questions = [{
    question: "What does COSHH stand for?",
    ans1: "Control of Substances Hazardous to Health",
    ans2: "Careful of Substances Harmful to Health",
    ans3: "Control of Spillages Hazardous to Health",
    ans4: "Control of Substances Hurtful to Health",
    correct: "1"
},
{
    question: "What are the safe systems of work, provided by an employer, designed to do??",
    ans1: "They only help make the job quicker",
    ans2: "They only help to stop employees having accidents",
    ans3: "They only help stop employees and all others having accidents",
    ans4: "They only help prevent visitors having accidents",
    correct: "3"
},
{
    question: "What year did RIDDOR start?",
    ans1: "1990",
    ans2: "1995",
    ans3: "2000",
    ans4: "2005",
    correct: "2"
},
{
    question: "What is the first action to take when approaching the scene of an accident?",
    ans1: "Check for signs of life",
    ans2: "Wait for the emergency services",
    ans3: "Attend the most serious injury",
    ans4: "Make sure the area is safe to enter",
    correct: "4"
},
{
    question: "There is a fault with the PPE, the user should:?",
    ans1: "Not do the task and inform the supervisor of the problem immediately",
    ans2: "Get somebody else to complete the task",
    ans3: "Use the equipment and continue the task anyway",
    ans4: "Use the equipment to do the task and tell the supervisor later",
    correct: "1"
},
{
    question: "Why should accidents in the workplace be reported?",
    ans1: "To prevent a similar accident in the future",
    ans2: "Reduce levels of paperwork",
    ans3: "Check whether staff are carrying out their duties or not",
    ans4: "To enable staff to learn from their mistakes",
    correct: "1"
},
{
    question: "Which one of the following lists contains only PPE?",
    ans1: "Dust mask, safety goggles and ear defenders",
    ans2: "Ear defenders, reading glasses and trainers",
    ans3: "Thermal gloves, machine guard and overalls",
    ans4: "Machine guard, dust mask and safety goggles",
    correct: "1"
},
{
    question: "What is the best way of dealing with a hazard to ensure others are not put at risk?",
    ans1: "Remove it immediately",
    ans2: "Leave it for others to sort out",
    ans3: "Place a barrier tape around it",
    ans4: "Display a notice or warning sign",
    correct: "1"
},
{
    question: "Where should information be found regarding the disposal of old chemical products?",
    ans1: "By contacting the manufacturer",
    ans2: "On the product sheet or side of the container",
    ans3: "On the internet",
    ans4: "At the local library",
    correct: "2"
},
{
    question: "The accident book is a legal document that does what?",
    ans1: "Describes how businesses should deal with an accident",
    ans2: "Details risk assessments and safety rules",
    ans3: "Records the details of an accident in the workplace",
    ans4: "Lists the first aid requirements of the workplace",
    correct: "3"
},
{
    question: "Which of the following pieces of health and safety legislation is mainly concerned with the handling of hazardous materials?",
    ans1: "Manual handling",
    ans2: "RIDDOR",
    ans3: "COSHH",
    ans4: "HASAWA",
    correct: "3"
},
{
    question: "The HASAWA applies to??",
    ans1: "Supervisors, managers and assessors only",
    ans2: "Trainees and supervisors only",
    ans3: "Trainees, supervisors, managers and assessors",
    ans4: "Trainees only",
    correct: "3"
},
{
    question: "Which one of the following situations would be most appropriate to use PPE?",
    ans1: "Working in the rain",
    ans2: "Working off-site",
    ans3: "Working indoors",
    ans4: "Working with chemicals",
    correct: "4"
},
{
    question: "Which of the following is the best method of finding information on workshop equipment?",
    ans1: "From the health and safety at work manual",
    ans2: "From the manufacturer's handbook or technical data",
    ans3: "By discussing it with a senior colleague",
    ans4: "By contacting the original supplier of the equipment",
    correct: "2"
},
{
    question: "Which of the following is an example of safe working?",
    ans1: "Lifting more than you can handle",
    ans2: "Loading lifting equipment with as much material as possible",
    ans3: "Wearing safety goggles to perform every task",
    ans4: "Checking the work area to make sure it is free from hazards",
    correct: "4"
},
{
    question: "Which of the following statements is likely to result in an injury to the operator?",
    ans1: "Selecting the right tool for the job",
    ans2: "Wearing safety goggles or glasses",
    ans3: "Using a tool with loose handles",
    ans4: "Keeping cutting tools sharp",
    correct: "3"
},
{
    question: "What is YOUR responsibility for health and safety at Work?",
    ans1: "I have no responsbility to health and safety",
    ans2: "I dont know, my Manager will tell me when I have a responsibility",
    ans3: "Follow procedures and work in a safe manner",
    ans4: "To work in a safe manner",
    correct: "3"
},
{
    question: "In the event of a fire what do you do?",
    ans1: "Leave it, somebody else will sort it.",
    ans2: "Find a manager or teamleader and tell them, then head towards the exit",
    ans3: "Grab the nearest fire extinguisher and tackle the fire",
    ans4: "Walk quickly to the nearest exit and activate an alarm call button on exit",
    correct: "4"
},
{
    question: "What is a risk assessment?",
    ans1: "A visual assessment made by an operator to assess risks before an operation",
    ans2: "After an accident has occured its an used to see how it happened",
    ans3: "A documented method of looking at work activities, considering what could go wrong, and deciding on suitable control measures to prevent loss, damage or injury in the workplace",
    ans4: "A document made to ensure we are legally compliant",
    correct: "3"
},
{
    question: "How should you lift correctly?",
    ans1: "Adopt a stable position lift using the arms to take the weight of the lift",
    ans2: "Adopt a stable position lift using the back to take the weight of the lift",
    ans3: "Adopt a stable position lift using the legs to take the weight of the lift",
    ans4: "Drag the weight so you dont need to lift it",
    correct: "3"
}
];

//variables to select elements

const playButton = document.getElementById('play-btn');
const homeSection = document.getElementById('home-section');
const quizSection = document.getElementById('quiz-game-section');
const exitGameButton = document.getElementById('exit-game');
const exitYesBtn = document.getElementById('exit-yes');
const exitNoBtn = document.getElementById('exit-no');
const question = document.getElementById('question');
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
