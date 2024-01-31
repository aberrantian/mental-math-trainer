function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function cloneArray(array) {
  let new_array = [];

  for (let index = 0; index < array.length; index++) {
    new_array[index] = array[index];
  }

  return new_array;
}

function operate(operand_a, operator, operand_b) {
  let result;

  switch (operator) {
    case "*":
      result = multiply(operand_a, operand_b);
      break;
    case "/":
      result = divide(operand_a, operand_b);
      break;
    case "+":
      result = add(operand_a, operand_b);
      break;
    case "-":
      result = subtract(operand_a, operand_b);
      break;
    default:
      break;
  }

  return result;
}
  let result;

    for (let index = 0; index < exp.length; index++) {
      if (exp[index] === "*") {

      }
    }

  return result;
}