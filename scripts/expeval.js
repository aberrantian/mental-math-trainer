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

function replace(first_half, replacement, second_half) {
  let new_array = [];

  if (Array.isArray(first_half)) {
    for (let index = 0; index < first_half.length; index++) {
      new_array.push(first_half[index]);
    }
  } else {
    new_array.push(first_half);
  }

  new_array.push(replacement);

  if (Array.isArray(second_half)) {
    for (let index = 0; index < second_half.length; index++) {
      new_array.push(second_half[index]);
    }
  } else {
    new_array.push(second_half);
  }

  return new_array;
}
  let result;

    for (let index = 0; index < exp.length; index++) {
      if (exp[index] === "*") {

      }
    }

  return result;
}