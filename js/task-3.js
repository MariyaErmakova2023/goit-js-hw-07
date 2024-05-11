const inputName = document.querySelector("#name-input");
const spanValue = document.querySelector("#name-output");
inputName.addEventListener("input", () => {
  const name = inputName.value.trim();
  name === ""
    ? (spanValue.textContent = "Anonymus")
    : (spanValue.textContent = name);
});
