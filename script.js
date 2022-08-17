// Using Data Attributes in HTML because it is easier to see which HTML elements are being used by JavaScript and which HTML elements are being used by CSS

class Calculator {
  // Will take previous and current operand text element.
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement; // Variables for class
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear(); // Clear all inputs because we want a clear calculator every time we start a new calculator
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    this.currentOperand = number;
  }

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

// Defining a new class
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
