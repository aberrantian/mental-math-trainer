import { expGen } from "./scripts/expgen.js";

const EXP_DIV = document.getElementById("expression");
EXP_DIV.innerText = expGen().join(" ") + " = ";
