import { expGen } from "./scripts/expgen.js";
import { expEval } from "./scripts/expeval.js";

let exp = expGen();
let answer = expEval(exp);


const EXP_DIV = document.getElementById("expression");
EXP_DIV.innerText = exp.join(" ") + " = " + answer;

const WARNING = document.createElement("div");
WARNING.innerText = "This version of the project is incomplete!";
WARNING.style = "font-size: 0.8rem;font-weight: bold;position: absolute;top: 0px;background-color: red; width: 100%;"
document.body.append(WARNING);