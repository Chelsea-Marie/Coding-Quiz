var startPage = document.getElementById("start-page");
var questionPage = document.getElementById("question-page");
var endPage = document.getElementById("end-page");
var scorePage = document.getElementById("highscore-page");
var startButton = document.getElementById("start-btn");
var questionText = document.getElementById("question-text");
var option1Btn = document.getElementById("option-1");
var option2Btn = document.getElementById("option-2");
var option3Btn = document.getElementById("option-3");
var option4Btn = document.getElementById("option-4");
var resultP = document.getElementById("result");
var finalScoreSpan = document.getElementById("final-score");
var initialsInput = document.getElementById("initials-input");
var submitBtn = document.getElementById("submit-btn");
var hsBtn = document.getElementById("hs-btn");
var scoreListUl = document.getElementById("score-list");
var timeId;
var totalTime = 60;
var currentIndex = 0;

var savedScores = JSON.parse(localStorage.getItem("savedScore")) || [];

var questions = [
    {
       text: "What option will make the largest heading size?" ,
       options: [
        "h3", "h4", "h1","h2"
       ],
       answer: "h1"
    },
    {
        text: "How are webpages styled?" ,
        options: [
         "HTML", "CSS", "Python","Node.js"
        ],
        answer: "CSS"
     },
     {
        text: "How do you call an id in CSS?" ,
        options: [
         ".", "{}", "*","#"
        ],
        answer: "#"
     },
     {
         text: "What was JavaScript's original name?" ,
         options: [
          "Mocha", "Espresso", "Latte", "Coffee"
         ],
         answer: "Mocha"
      },
      {
        text: "What is plain JavaScript without any added libraries or frameworks?" ,
        options: [
         "Chocolate JavaScript", "Strawberry JavaScript", "Cinnamon JavaScript","Vanilla JavaScript"
        ],
        answer: "Vanilla JavaScript"
     },
     {
         text: "What is a coding error in a computer program?" ,
         options: [
          "Ant", "Bug", "Squirrel", "Pest"
         ],
         answer: "Bug"
      }
]

function startQuiz() {
    startPage.classList.add("hide")
    questionPage.classList.remove("hide");
    timeId=setInterval(timeInterval, 1000)
    displayQuestion();
}

function endQuiz () {
    clearInterval(timeId);
    questionPage.classList.add("hide");
    endPage.classList.remove("hide");
    finalScoreSpan.textContent = totalTime;
}

function displayQuestion() {
    questionText.textContent = questions[currentIndex].text
    option1Btn.textContent = questions[currentIndex].options[0]
    option2Btn.textContent = questions[currentIndex].options[1]
    option3Btn.textContent = questions[currentIndex].options[2]
    option4Btn.textContent = questions[currentIndex].options[3]
}

function nextQuestion(event) {
    console.log(event.target);
    console.log(event.target.textContent);
    console.log(questions[currentIndex].answer)
    
    if(event.target.textContent == questions[currentIndex].answer) {
        console.log("correct")
        resultP.textContent = "Correct!"
    } else {
        console.log("wrong")
        resultP.textContent = "Wrong!"
        totalTime = totalTime - 10;

    }



    currentIndex++;
    if(currentIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz()
    }
}

function saveScore() {
    var initials = initialsInput.value;
    var score = totalTime;

    var data = {
        initials,
        score
    }

    savedScores.push(data)

    localStorage.setItem("savedScore", JSON.stringify(savedScores))
}

function showHighscores () {
    endPage.classList.add("hide");
    scorePage.classList.remove("hide");

    var savedData = JSON.parse(localStorage.getItem("savedScore"));

    for(i = 0; i < savedData.length; i++) {
        var newLi = document.createElement("li");
        newLi.textContent = savedData[i].initials + " - " + savedData[i].score
        scoreListUl.append(newLi)
    }




}

function timeInterval() {
    document.getElementById('timer').textContent = totalTime;
    totalTime = totalTime - 1;
    if(totalTime <= 0){
        clearInterval(timeId);
        endQuiz();
    }
}

startButton.addEventListener("click", startQuiz)
option1Btn.addEventListener("click", nextQuestion)
option2Btn.addEventListener("click", nextQuestion)
option3Btn.addEventListener("click", nextQuestion)
option4Btn.addEventListener("click", nextQuestion)
submitBtn.addEventListener("click", saveScore)
hsBtn.addEventListener("click", showHighscores)
