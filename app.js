function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
    default:
      break;
  }
}
let cur_input = document.getElementById("current-input");
let prev_input = document.getElementById("previous-input");
let operator_input = document.getElementById("operator-input");
let num1 = [];
let num2 = [];
let numTemp = [];

let nums = document.getElementsByClassName("num");
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", function () {
    numTemp.push(nums[i].innerText);
    cur_input.innerText = numTemp.join("");
  });
}

let operators = document.getElementsByClassName("operator");
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    if (numTemp.length == 0) {
      return 0;
    }
    if (num1.length == 0) {
      num1 = parseFloat(numTemp.join(""));
      numTemp = [];
      cur_input.innerText = numTemp;
      prev_input.innerText = num1;
      operator_input.innerText = operators[i].getAttribute("name");
    } else {
      switch (operator_input.innerText) {
        case "ADD":
          num1 = operate("add", num1, parseFloat(numTemp.join("")));
          prev_input.innerText = num1;
          numTemp = [];
          cur_input.innerText = numTemp;
          operator_input.innerText = operators[i].getAttribute("name");
          break;
        case "SUBTRACT":
          num1 = operate("subtract", num1, parseFloat(numTemp.join("")));
          prev_input.innerText = num1;
          numTemp = [];
          cur_input.innerText = numTemp;
          operator_input.innerText = operators[i].getAttribute("name");
          break;
        case "MULTIPLY":
          num1 = operate("multiply", num1, parseFloat(numTemp.join("")));
          prev_input.innerText = num1;
          numTemp = [];
          cur_input.innerText = numTemp;
          operator_input.innerText = operators[i].getAttribute("name");
          break;
        case "DIVIDE":
          num1 = operate("divide", num1, parseFloat(numTemp.join("")));
          prev_input.innerText = num1;
          numTemp = [];
          cur_input.innerText = numTemp;
          operator_input.innerText = operators[i].getAttribute("name");
          break;
        default:
          break;
      }
    }
  });
}

let clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  num1 = [];
  num2 = [];
  numTemp = [];
  operator_input.innerText = [];
  prev_input.innerText = [];
  cur_input.innerText = [];
});

let submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  if (numTemp.length != 0) {
    switch (operator_input.innerText) {
      case "ADD":
        num1 = operate("add", num1, parseFloat(numTemp.join("")));
        cur_input.innerText = num1;
        operator_input.innerText = [];
        prev_input.innerText = [];
        numTemp = num1.toString().split("");
        num1 = [];
        break;
      case "SUBTRACT":
        num1 = operate("subtract", num1, parseFloat(numTemp.join("")));
        cur_input.innerText = num1;
        operator_input.innerText = [];
        prev_input.innerText = [];
        numTemp = num1.toString().split("");
        num1 = [];
        break;
      case "MULTIPLY":
        num1 = operate("multiply", num1, parseFloat(numTemp.join("")));
        cur_input.innerText = num1;
        operator_input.innerText = [];
        prev_input.innerText = [];
        numTemp = num1.toString().split("");
        num1 = [];
        break;
      case "DIVIDE":
        num1 = operate("divide", num1, parseFloat(numTemp.join("")));
        cur_input.innerText = num1;
        operator_input.innerText = [];
        prev_input.innerText = [];
        numTemp = num1.toString().split("");
        num1 = [];
        break;
      default:
        break;
    }
  }
});

let period = document.getElementById("period");
period.addEventListener("click", function () {
  if (!numTemp.includes(".")) {
    numTemp.push(".");
    cur_input.innerText = numTemp.join("");
  }
});
