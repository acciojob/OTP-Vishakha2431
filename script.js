let inputs = document.querySelectorAll(".code");


inputs[0].focus();

inputs.forEach((input, index) => {

  input.addEventListener("input", (e) => {
    // allow only 1 digit
    input.value = input.value.slice(0, 1);

    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {

      if (input.value === "" && index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});