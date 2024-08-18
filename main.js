var difficulty = 0;

function setDifficulty(difficulty) {
    if (difficulty == 0) {
        document.getElementById("difficulty").innerHTML = "Easy";

    } else if (difficulty == 1) {
        document.getElementById("difficulty").innerHTML = "Medium";


    } else if (difficulty == 2) {
        document.getElementById("difficulty").innerHTML = "Hard";


    }

}


function difficultyPlus() {
    if (difficulty < 2) {
        difficulty++;
        setDifficulty(difficulty);
        console.log(difficulty);
    }



}

function difficultyMinus() {
    if (difficulty > 0) {
        difficulty--;
        setDifficulty(difficulty);
    }

}


function showQuiz() {
    console.log("hi");
    document.getElementById("quiz-box").style.display = "block";
    document.getElementById("next-btn").style.display = "block";
    document.getElementById("text").style.display = "none";
    document.getElementById("back-btn").style.display = "block";
    document.getElementById("contributers").style.right = "7%";

}