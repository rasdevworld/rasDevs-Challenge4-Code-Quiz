var quizIntroEl = document.getElementById("quiz-intro")
var timerEl = document.getElementById("timer")
var timerLabelEl =  document.getElementById("timer-label")
var viewScoreEl = document.getElementById("view-score")
var startQuizbtnEl = document.getElementById("start-quiz-btn")
var questionSectionEl = document.getElementById("question-section")
var questionTitleEl = document.getElementById("question-title")
var choiceListEl = document.getElementById("choice-list")
var resultBlkEl = document.getElementById("result-blk")
//var resultCwEl = document.getElementById("result-cw")
var messageEl = document.getElementById("message")
var initialsInputEl = document.getElementById("initials-input")
var finalScoreEl = document.getElementById("final-score")
var inputInitialsEl = document.getElementById("input-initials")
var submitInitialsbtnEl = document.getElementById("submit-initials-btn")
var highScoresEl = document.getElementById("high-scores")
var highScoreListEl =document.getElementById("high-score-list")
var goBackbtnEl = document.getElementById("go-back-btn")
var clearHighscorebtnEl = document.getElementById("clear-high-score-btn")
var setIntervalId
var timeRemaining = questionData.length * 15
var index = 0

function startQuiz() {
    quizIntroEl.classList.add("hide")
    questionSectionEl.classList.remove("hide")
    renderQuestions()
    setIntervalId = setInterval(startTimer, 1000)
}

function renderQuestions() {
    resultBlkEl.classList.add("hide")
    messageEl.innerHTML=""
    if(index < questionData.length) {
        questionTitleEl.innerHTML=questionData[index].title
        choiceListEl.textContent=""
        inputInitialsEl.value = ""    
              for(var i=0; i<questionData[index].choices.length; i++ ) {
                    var li=document.createElement("li")
                    var button=document.createElement("button") 
                    button.textContent=questionData[index].choices[i]
                    li.appendChild(button)
                    choiceListEl.appendChild(li)
        }
    }else {
    endQuiz()
    }
}

function refreshData() {
    viewScoreEl.classList.remove("hide")
    timerLabelEl.classList.remove("hide")
    timeRemaining = questionData.length * 15
    timerEl.textContent = 0
    //timeRemaining = 0
    index = 0
}

function startTimer() {
timerEl.textContent = timeRemaining --

if(timeRemaining === 0){
    console.log(timeRemaining)
    endQuiz()
}
}

function nextQuestion(event) {
        var currentChoiceBtn = event.target
        currentChoiceBtn = currentChoiceBtn.textContent
        currentChoiceBtn = currentChoiceBtn.match(questionData[index].solution)
        var solution=questionData[index].solution

         if(currentChoiceBtn == solution){
            messageEl.classList.remove("hide")
            resultBlkEl.classList.remove("hide")
            messageEl.textContent="Correct!"
            //console.log("correct")

         }else{
            resultBlkEl.classList.remove("hide")
            messageEl.classList.remove("hide")
            messageEl.textContent="Wrong!"
            timeRemaining=timeRemaining-10
            //console.log("wrong")
         }
         index++
         setTimeout( renderQuestions,500)
}


function endQuiz() {

    clearInterval(setIntervalId)
     questionSectionEl.classList.add("hide")
     initialsInputEl.classList.remove("hide")
     resultBlkEl.classList.add("hide")
     timerEl.textContent = timeRemaining
     finalScoreEl.textContent = timerEl.textContent
}

function goBackMain() {
   questionSectionEl.classList.add("hide")
   
    //messageEl.classList.add("hide")
    resultBlkEl.classList.add("hide")
    initialsInputEl.classList.add("hide")
    highScoresEl.classList.add("hide")
    quizIntroEl.classList.remove("hide")
    refreshData()
    console.log("index=> "+index+"timer=> "+timeRemaining+"qdatalength => "+questionData.length)
}


startQuizbtnEl.addEventListener("click", startQuiz)
choiceListEl.addEventListener("click", nextQuestion)
submitInitialsbtnEl.addEventListener("click", storeStudentData)
goBackbtnEl.addEventListener("click", goBackMain)
clearHighscorebtnEl.addEventListener("click", clearHighScores)
viewScoreEl.addEventListener("click", viewHighScore)
refreshData()