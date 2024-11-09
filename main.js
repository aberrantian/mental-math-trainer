import { expGen } from "./scripts/expgen.js";
import { expEval } from "./scripts/expeval.js";
import { inputHandler } from "./scripts/inputhandler.js";

const VERSION = "2024-11-09 BETA";
console.log(`VERSION: ${VERSION}`);

const EXPRESSION_DIV = document.getElementById("expression");
const USER_INPUT_DIV = document.getElementById("user-input");

const SET = {
    expression: undefined,
    evaluation: undefined,
    new: () => {SET.expression = expGen(); SET.evaluation = expEval(SET.expression)}
}

function display() {
    SET.new()
    let display_text = SET.expression.join(" ");
    display_text = display_text.replace("/", "÷");
    display_text = display_text.replace("*", "×");
    EXPRESSION_DIV.innerText = display_text;
}

display();

function check() {
    if (USER_INPUT_DIV.innerText === String(SET.evaluation)) {
        display();
        USER_INPUT_DIV.innerText = "";
    }

    return;
}

document.addEventListener("keydown", (event) => {
    inputHandler(event, "keydown");
    check();
});

for (const BUTTON of document.querySelectorAll(".keypad-button")) {
    BUTTON.addEventListener("click", (event) => {
        inputHandler(event, "click");
        check();
    })
}