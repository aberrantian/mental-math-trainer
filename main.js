import { expGen } from "./scripts/expgen.js";
import { expEval } from "./scripts/expeval.js";

let exp = expGen();
let answer = expEval(exp);


const EXP_DIV = document.getElementById("expression");
EXP_DIV.innerText = exp.join(" ") + " = " + answer;
