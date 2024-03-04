import { expGen } from "./scripts/expgen.js";
import { expEval } from "./scripts/expeval.js";
import { inputHandler } from "./scripts/inputhandler.js";

let exp = expGen();
let answer = expEval(exp);


const EXP_DIV = document.getElementById("expression");
EXP_DIV.innerText = exp.join(" ") + " = ";

const USER_INPUT = document.getElementById("user-input");


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