function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const bodyColor = document.body;

const colorChange = () => {
  const currentColor = getRandomHexColor();
  console.log(currentColor);
  bodyColor.style.backgroundColor = currentColor;
  spanColor.textContent = currentColor;
};

button.addEventListener("click", colorChange);
