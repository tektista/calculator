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
  return operator(x, y);
}

function addToDisplay(innerText) {
  let text = innerText;
  let resultDiv = document.querySelector(".result");
  resultDiv.innerText = resultDiv.innerText + text;
}

// ADD event click event lister for number buttons

const buttonsContainer = document.querySelectorAll(
  ".buttons-container>*, .clear-delete-container>*"
);

console.log(buttonsContainer);

buttonsContainer.forEach((element) => {
  element.addEventListener("click", function () {
    addToDisplay(element.innerText);
  });
});
