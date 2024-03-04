import { expGen } from "./scripts/expgen.js";
import { expEval } from "./scripts/expeval.js";
import { inputHandler } from "./scripts/inputhandler.js";

let exp = expGen();
let answer = expEval(exp);


const EXP_DIV = document.getElementById("expression");
EXP_DIV.innerText = exp.join(" ") + " = ";

const WARNING = document.createElement("div");
WARNING.innerText = "Dev Branch";
WARNING.style = "font-size: 0.8rem;font-weight: bold;position: absolute;top: 0px;background-color: red; width: 100%;"
document.body.append(WARNING);

const NEW_EXP = document.createElement("button");
NEW_EXP.innerText = "new";
NEW_EXP.style = "position: absolute; top: 32px"

NEW_EXP.addEventListener('click', () => {
    console.clear();
    exp = expGen();
    answer = expEval(exp);
    EXP_DIV.innerText = exp.join(" ") + " = ";
    document.getElementById("user-input").innerText = "";
});

document.body.append(NEW_EXP);


document.body.addEventListener("keydown", inputHandler);