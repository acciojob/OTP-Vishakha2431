//your JS code here. If required.
let inputs = document.querySelectorAll(".code");

// FORWARD MOVEMENT
inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace"  && index > 0) {
      inputs[index - 1].focus();
    }
  });
});
