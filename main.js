import { expGen } from "./scripts/expgen.js";
import { expEval } from "./scripts/expeval.js";
import { inputHandler } from "./scripts/inputhandler.js";

let exp = expGen();
let answer = expEval(exp);


const EXP_DIV = document.getElementById("expression");
EXP_DIV.innerText = exp.join(" ") + " = ";

const USER_INPUT = document.getElementById("user-input");

const WARNING = document.createElement("div");
WARNING.innerText = "Dev Branch";
WARNING.style = "font-size: 0.8rem;font-weight: bold;position: absolute;top: 0px;background-color: red; width: 100%;"
document.body.append(WARNING);


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