var startPage = document.getElementById("start-page");
var questionPage = document.getElementById("question-page");
var endPage = document.getElementById("end-page");
var startButton = document.getElementById("start-btn");
var questionText = document.getElementById("question-text")
var option1Btn = document.getElementById("option-1")
var option2Btn = document.getElementById("option-2")
var option3Btn = document.getElementById("option-3")
var option4Btn = document.getElementById("option-4")

var currentIndex = 0;

var questions = [
    {
       text: "What is 1 + 1?" ,
       options: [
        "3", "4", "2","5"
       ],
       answer: "2"
    },
    {
        text: "What is 1 + 2?" ,
        options: [
         "three", "four", "two","five"
        ],
        answer: "three"
     },
     {
        text: "What is 1 + 1?" ,
        options: [
         "3", "4", "2","5"
        ],
        answer: "2"
     },
     {
         text: "What is 1 + 2?" ,
         options: [
          "three", "four", "two","five"
         ],
         answer: "three"
      },
      {
        text: "What is 1 + 1?" ,
        options: [
         "3", "4", "2","5"
        ],
        answer: "2"
     },
     {
         text: "What is 1 + 2?" ,
         options: [
          "three", "four", "two","five"
         ],
         answer: "three"
      }
]

function startQuiz() {
    startPage.classList.add("hide");
    questionPage.classList.remove("hide");
    displayQuestion();
}

function endQuiz () {
    questionPage.classList.add("hide");
    endPage.classList.remove("hide");
}

function displayQuestion() {
    questionText.textContent = questions[currentIndex].text
    option1Btn.textContent = questions[currentIndex].options[0]
    option2Btn.textContent = questions[currentIndex].options[1]
    option3Btn.textContent = questions[currentIndex].options[2]
    option4Btn.textContent = questions[currentIndex].options[3]
}

function nextQuestion() {
    currentIndex++;
    if(currentIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz()
    }
}

startButton.addEventListener("click", startQuiz)
option1Btn.addEventListener("click", nextQuestion)
option2Btn.addEventListener("click", nextQuestion)
option3Btn.addEventListener("click", nextQuestion)
option4Btn.addEventListener("click", nextQuestion)