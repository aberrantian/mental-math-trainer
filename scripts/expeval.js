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

function PEDMAS(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === "*") {
      return index;
    }    
  }

  for (let index = 0; index < array.length; index++) {
    if (array[index] === "/") {
      return index;
    }    
  }

  for (let index = 0; index < array.length; index++) {
    if (array[index] === "+") {
      return index;
    }    
  }

  for (let index = 0; index < array.length; index++) {
    if (array[index] === "-") {
      return index;
    }    
  }

  console.log("PEMDAS did not find anything");
  return;
}

export function expEval(exp = [3, "+", 4, "/", 5, "*", 6, "+", 5]) {
  console.log("exp =", exp);
  let result;

    for (let index = 0; index < exp.length; index++) {
      if (["*", "/", "+", "-"].includes(exp[index])) {
        let a_index = index -1;
        let b_index = index +1;

        let a = exp[a_index];
        let b = exp[b_index];

        result = replace(exp.slice(0, a_index), operate(a, exp[index], b), exp.slice(b_index +1));
        break;
      }
    }

  console.log(result);
  return result;
}

/*
does not perform operations in order of PEMDAS
*/