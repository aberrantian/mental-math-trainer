import { expGen } from "./scripts/expgen.js";
import { expEval } from "./scripts/expeval.js";
import { inputHandler } from "./scripts/inputhandler.js";

let exp = expGen();
let answer = expEval(exp);


const EXP_DIV = document.getElementById("expression");
EXP_DIV.innerText = exp.join(" ") + " = ";

const USER_INPUT = document.getElementById("user-input");

const GITHUB = document.createElement("a");
GITHUB.innerText = "GitHub";
GITHUB.style = "font-size: 0.8rem;font-weight: bold;position: absolute;top: 0px; width: 100%; color: white; text-align: center;"
GITHUB.href = "https://github.com/aberrantian/mmt";
GITHUB.referrerPolicy = "no-referrer";
GITHUB.target = "_blank";
document.body.append(GITHUB);


function newExp() {
    console.clear();
    exp = expGen();
    answer = expEval(exp);
    EXP_DIV.innerText = exp.join(" ") + " = ";
    USER_INPUT.innerText = "";
}


document.body.addEventListener("keydown", (e) => {
    inputHandler(e);
    
    if (USER_INPUT.innerText === String(answer)) {
        newExp();
    }
});