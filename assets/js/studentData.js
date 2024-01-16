var studentDatalog = []

function storeStudentData() {
 studentData = {
        initials : inputInitialsEl.value,
        score : finalScoreEl.textContent
    }
    studentDatalog.push(studentData)
    localStorage.setItem('studentDatalog', JSON.stringify(studentDatalog))
    questionSectionEl.classList.add("hide")
    messageEl.classList.add("hide")
    initialsInputEl.classList.add("hide")
    highScoresEl.classList.remove("hide")
    viewScoreEl.classList.add("hide")
    timerLabelEl.classList.add("hide")
    var getScores = JSON.parse(localStorage.getItem("studentDatalog"))
    getScores.sort(compareScores)
    highScoreListEl.innerHTML = "";
    highScoreListEl.classList.remove("hide")
    if(getScores != null){
        for(var i =0; i < getScores.length; i++) {
            var studentli = document.createElement("li")
            studentli.textContent = getScores[i].initials+" - "+getScores[i].score
            highScoreListEl.append(studentli)
        }
    }
}

function viewHighScore() {
    quizIntroEl.classList.add("hide")
    questionSectionEl.classList.add("hide")
    messageEl.classList.add("hide")
    initialsInputEl.classList.add("hide")
    highScoresEl.classList.remove("hide")
    viewScoreEl.classList.add("hide")
    timerLabelEl.classList.add("hide")
    var getScores = JSON.parse(localStorage.getItem("studentDatalog"))
    highScoreListEl.innerHTML = "";
    highScoreListEl.classList.remove("hide")    
    getScores.sort(compareScores)
    if(getScores != null){
        for(var i =0; i < getScores.length; i++) {
            var studentli = document.createElement("li")
            studentli.textContent = getScores[i].initials+" - "+getScores[i].score
            highScoreListEl.append(studentli)
        }
    }
}

function compareScores(a, b) {
    var scoreA = a.score
    var scoreB = b.score
    var comparison = 0;
    if(scoreA < scoreB){
        comparison = 1
    }else if(scoreA > scoreB){
        comparison = -1
    }
    return comparison
}

function clearHighScores() {
    localStorage.clear()
    timeRemaining = questionData.length * 15
    var clearData = JSON.parse(localStorage.getItem("studentDatalog"))
    highScoreListEl.innerHTML = ""
}