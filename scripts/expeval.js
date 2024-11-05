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

function PEMDAS(array) {
  /*Support for Parenthesis and Exponents will be added in the future*/
  
  for (let index = 0; index < array.length; index++) {
    if (array[index] === "*" || array[index] === "/") {
      return index;
    }    
  }

  for (let index = 0; index < array.length; index++) {
    if (array[index] === "+" || array[index] === "-") {
      return index;
    }    
  }

  console.log("PEMDAS did not find anything");
  return;
}

export function expEval(exp) {
  let working_expression = cloneArray(exp)
  // console.log(working_expression)
  let target_operator = PEMDAS(working_expression);

  let num_a_index = target_operator -1;
  let num_b_index = target_operator +1;
  
  let num_a = working_expression[num_a_index];
  let num_b = working_expression[num_b_index];

  working_expression = replace(
    working_expression.slice(0, num_a_index),
    operate(num_a, working_expression[target_operator], num_b),
    working_expression.slice(num_b_index +1)
  );

  if (working_expression.length > 1 && working_expression.length < exp) {
    expEval(working_expression);
  } else {
    // console.log(working_expression)
    return working_expression[0];
  }
}
