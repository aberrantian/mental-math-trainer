const NUMBERS = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
];

const USER_INPUT = document.getElementById("user-input");

export function inputHandler(event) {
    // console.log(event.key);
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
