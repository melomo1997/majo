// !!!TODO LIST:!!!
// a. A REGISTRRATION: 
// 1. USERNAME
// 2. EMALI
// 3. PASSWORD

// b. CREATE QUESTIONS WITH ANSWERS
// THE DETAILS FOR "b" PART:
// 1. TITLE
// 2. DESCRIPTION
// 3. NUM OF QUESTIONS
// 4. ALLOW USERS TO START THE QUIZ, ANSWER, AND SUBMIT THEIR ANSWERS

// c. USE JSON TO MOCK A SERVER AND DATABASE FOR STORING USERS DATA


// ----------------------------------------------------------------

// ASSITIONAL FEATURS:
// 1) Implement a logout functionality
// 2) Allow users to view their quiz history and stores 
// 3) add a timer for each quize question

// ----------------------------------------------------------------

// 1- Add CSS (We can use Boostrap)
// 2- Imlement routing using React Router to NAVIGATE between different pages {login, registration, quiz list, quiz taking}
// 3- Organizing our app by using React components

const questions =[
  {
    question:"Where is studio Ghibili from?",
    answers:[
      {text:"Jamaica", correct: false},
      {text:"Japan", correct: true},
      {text:"Ghibraltar", correct: false},
      {text:"Korea", correct: false},
    ]
  },
  {
    question:"What animal is Kiki's pet?",
    answers:[
      {text:"Dog", correct: false},
      {text:"Hamster", correct: false},
      {text:"Bird", correct: false},
      {text:"Cat", correct: true},
    ]

  },
  {
    question:"What are Chihiro's parents turned into?",
    answers:[
      {text:"sharks", correct: false},
      {text:"Pigs", correct: true},
      {text:"elephants", correct: false},
      {text:"Spirits", correct: false},
    ]
  }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score= 0;
  nextButton.innerHTML = "Next";
  showQuestion();

}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". "+currentQuestion.
  question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);

  });
}

function resetState(){
  nextButton.style.display ="none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect =  selectedBtn.dataset.correct ==="true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}


function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex< questions.length){
    showQuestion();
  }else{
    showScore();

  }
}



nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})

startQuiz();


const targetDate = new Date().getTime() + 15 * 1000; // Set target time to 15 seconds from now
    const timerInterval = setInterval(updateTimer, 1000);

    function updateTimer() {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;

      if (timeDifference > 0) {
        const seconds = Math.floor(timeDifference / 1000);
        document.getElementById('timer').innerHTML = `${seconds}s`;
      } else {
        clearInterval(timerInterval);
        document.getElementById('timer').innerHTML = 'Countdown Expired';
      }
    }

