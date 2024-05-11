function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  destroyBoxes();
  let boxesHTML = "";
  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const size = 30 + i * 10;
    boxesHTML += `<div style="background-color: ${color}; width: ${size}px; height: ${size}px;"></div>`;
  }
  boxesContainer.insertAdjacentHTML("beforeend", boxesHTML);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

destroyButton.addEventListener("click", destroyBoxes);
