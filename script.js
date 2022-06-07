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

function operate(x, y, operator) {
  return window[operator](x, y);
}

function addToDisplay(text) {
  if (text != "=" && text != "Clear" && text != "Delete") {
    let displayDiv = document.querySelector(".display");
    displayDiv.innerText = displayDiv.innerText + text;
  }
}

function addToResult(solution) {
  let resultDiv = document.querySelector(".result");
  resultDiv.innerText = solution;
}

function calculate(valueOfButton) {
  if (valueOfButton == "clear") {
    let displayDiv = document.querySelector(".display");

    let resultDiv = document.querySelector(".result");
    resultDiv.innerText = "";

    displayDiv.innerText = "";
    currentString = "";
    firstNo = "";
    secondNo = "";
    solution = "";
    operatorVariable = "";
    return 0;
  }

  if (valueOfButton.match(/^[0-9]+$/) != null) {
    currentString = currentString + valueOfButton.toString();
  }

  if (
    (valueOfButton == "add" ||
      valueOfButton == "subtract" ||
      valueOfButton == "multiply" ||
      valueOfButton == "divide" ||
      valueOfButton == "=") &&
    firstNo == ""
  ) {
    firstNo = currentString;
    currentString = "";
    operatorVariable = valueOfButton;
  }

  if (
    ((valueOfButton == "add" ||
      valueOfButton == "subtract" ||
      valueOfButton == "multiply" ||
      valueOfButton == "divide") &&
      firstNo != "") ||
    valueOfButton == "="
  ) {
    secondNo = currentString;
  }

  console.log(firstNo);
  console.log(secondNo);

  if (firstNo != "" && secondNo != "") {
    solution = operate(Number(firstNo), Number(secondNo), operatorVariable);
    addToResult(solution);

    currentString = "";
    firstNo = solution;
    secondNo = "";
    operatorVariable = valueOfButton;
  }
}

// GLOBALS
let currentString = "";
let firstNo = "";
let secondNo = "";
let solution = "";

let operatorVariable = "";

// EVENT LISTENERS

const buttonsContainer = document.querySelectorAll(
  ".buttons-container>*, .clear-delete-container>*"
);

console.log(buttonsContainer);

buttonsContainer.forEach((element) => {
  element.addEventListener("click", function () {
    addToDisplay(element.innerText);
    calculate(element.value);
  });
});
