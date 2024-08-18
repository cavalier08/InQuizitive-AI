import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("API_KEY");
let questions = [];
let finalQtns = [];
document.getElementById("submit-btn").addEventListener('click', display);
const numQtns = document.getElementById("num-q");
async function display() {
    const notes = document.getElementById("myText");
    const diffLvl = document.getElementById("difficulty");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `in the format of everything in one line and only 3 underscores between each question, option and answer, (question___option1___option2___answer___question2 etc.) can you please generate a quiz of EXACTLY ${numQtns.value} multiple choice questions with 5 options each and an answer with difficulty very ${diffLvl} and based on these notes: ${notes.value}.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log("text: " + text);
    questions = text.split("___");
    console.log("questions: " + questions);
    removeSymbol();
    document.getElementById("myText").value = finalQtns;
    console.log("edited: " + finalQtns);

    loadQtn();
    nextBtn.addEventListener('click', nextQtn);

}

function removeSymbol() {
    for (let i = 0; i < questions.length; i++) {
        let newStr = "";
        for (let j = 0; j < questions[i].length; j++) {
            if ((questions[i][j] >= 'A' && questions[i][j] <= 'Z') || (questions[i][j] >= 'a' && questions[i][j] <= 'z')
                || questions[i][j] === " " || questions[i][j] === "?" || questions[i][j] === ","
                || questions[i][j] === "'" || questions[i][j] === "(" || questions[i][j] === ")" || (questions[i][j] >= '0' && questions[i][j] <= '9')) {
                newStr += questions[i][j];
            }
        }
        if (newStr.length !== 0) {
            finalQtns.push(newStr);
        }
    }
}

let currentQ = 0;
let qTitle = document.getElementById("qtn-title");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");
let opt5 = document.getElementById("opt5");
let nextBtn = document.getElementById("next-btn");

let options = [opt1, opt2, opt3, opt4, opt5];
function loadQtn() {
    console.log("hello: " + finalQtns[0]);
    qTitle.innerHTML = finalQtns[currentQ];
    opt1.innerHTML = finalQtns[currentQ + 1];
    opt2.innerHTML = finalQtns[currentQ + 2];
    opt3.innerHTML = finalQtns[currentQ + 3];
    opt4.innerHTML = finalQtns[currentQ + 4];
    opt5.innerHTML = finalQtns[currentQ + 5];

    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener('click', () => checkAns(i));
    }
}
let score = 0;
let clicked = false;
function checkAns(index) {
    if (finalQtns[currentQ + 6].includes(options[index].innerHTML) && !clicked) {
        clicked = true;
        score++;
        console.log("score: " + score);
        options[index].classList.add("correct");
    } else if (!clicked) {
        clicked = true;
        //edit css to red background and edit correct asnwer to creen
        options[index].classList.add("wrong");
        for (let i = 0; i < options.length; i++) {
            // console.log("options: " + options[i].innerHTML);
            // console.log(finalQtns[currentQ + 6].includes(options[i].innerHTML));
            if (finalQtns[currentQ + 6].includes(options[i].innerHTML)) {
                options[i].classList.add("correct");
                break;
            }
        }
    }
}
let scoreText = document.getElementById("score")
function displayScore() {
    const quizText = document.getElementById("quiz-box");
    quizText.style.display = "none";
    const nextHide = document.getElementById("next-btn");
    nextHide.style.display = "none";
    scoreText.textContent = `SCORE: ${score} / ${numQtns.value}`;
    console.log("YAYAYAY");
}
function nextQtn() {
    for (let i = 0; i < options.length; i++) {
        if (options[i].classList.contains("correct")) {
            options[i].classList.remove("correct");
        } else if (options[i].classList.contains("wrong")) {
            options[i].classList.remove("wrong");
        }
    }
    clicked = false;
    currentQ += 7;
    console.log("length: " + finalQtns.length)
    console.log(currentQ);
    if (currentQ < finalQtns.length - 1) {
        loadQtn();
    } else {
        displayScore();
    }
}

function reset() {
    questions = [];
    finalQtns = [];
    score = 0;
    currentQ = 0;
    clicked = false;
}
