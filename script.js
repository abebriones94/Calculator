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

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1); // Get last value of string and chop it off
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return; // Return will stop function from going any further
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = ""; // Clearing previous operand and saving it
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand); // converting the string to a number
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return; // if no previous number or current numbner...cancel (return)
    switch (
      this.operation // Swtich means ability to do a lot of if statements on a single object (this.operation)
    ) {
      case "+": // If statements are defined with the word case
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default: // Else statement
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
      // Previous operand gets moved to the top of output
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

// Defining a new class
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

// Buttons ----------------------------------------------------------------

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
