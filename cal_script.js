const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      display.value = "0";
      return;
    }

    if (value === "=") {
      try {
        // Replace × and ÷ with * and /
        const expression = currentInput.replace(/×/g, "*").replace(/÷/g, "/");
        currentInput = eval(expression).toString();
      } catch {
        currentInput = "Error";
      }
      display.value = currentInput;
      return;
    }

    if (["+", "-", "×", "÷"].includes(value)) {
      currentInput += " " + value + " ";
    } else {
      if (currentInput === "0" || currentInput === "Error") currentInput = "";
      currentInput += value;
    }

    display.value = currentInput;
  });
});