const NUMBERS = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
];

const USER_INPUT = document.getElementById("user-input");

export function inputHandler(event) {
    if (NUMBERS.includes(event.key)) {
        console.log(event.key);
        USER_INPUT.innerText += `${event.key}`;
    } else if (event.key === "Backspace") {
        USER_INPUT.innerText = USER_INPUT.innerText.slice(0, -1);
    } else {
        return;
    }
}