const NUMBERS = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
];

const USER_INPUT = document.getElementById("user-input");

export function inputHandler(event, type) {
    if (type === "keydown") {
        if (NUMBERS.includes(event.key)) {
            USER_INPUT.innerText += `${event.key}`;
        } else if (event.key === "Backspace") {
            USER_INPUT.innerText = USER_INPUT.innerText.slice(0, -1);
        } else if (event.key === "-") {
            if (USER_INPUT.innerText[0] === "-") {
                USER_INPUT.innerText = USER_INPUT.innerText.slice(1);
            } else {
                USER_INPUT.innerText = "-" + USER_INPUT.innerText;
            }
        } else {
            return;
        }
    }

    if (type === "click") {
        const INPUT = event.target.id.slice(7); // remove "keypad-"

        if (NUMBERS.includes(INPUT)) {
            USER_INPUT.innerText += `${INPUT}`;
        } else if (INPUT === "delete") {
            USER_INPUT.innerText = USER_INPUT.innerText.slice(0, -1);
        } else if (INPUT === "minus") {
            if (USER_INPUT.innerText[0] === "-") {
                USER_INPUT.innerText = USER_INPUT.innerText.slice(1);
            } else {
                USER_INPUT.innerText = "-" + USER_INPUT.innerText;
            }
        } else {
            return;
        }
    }
    
}
