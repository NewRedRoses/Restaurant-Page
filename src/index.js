import menuPage from "./menuPage";
import startPage from "./startPage";
import contactPage from "./contactPage";
import "./styles.css";

const container = document.querySelector("div#content");

const welcomeMsg = document.createElement("div");
welcomeMsg.classList.add("header-text");
welcomeMsg.textContent = "Fancy Restaurant page";
container.appendChild(welcomeMsg);

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttons-container");
container.appendChild(buttonContainer);
const buttonValues = ["Home", "Menu", "Contact"];
let selectedButton;
for (const value of buttonValues) {
  const button = document.createElement("button");
  button.classList.add(`section-button`);
  button.setAttribute("id", value);
  button.textContent = value;
  buttonContainer.appendChild(button);
}
startPage(container);
const homeBtn = document.getElementById("Home");
homeBtn.addEventListener("click", () => {
  removeAllContent();
  startPage(container);
});

const menuBtn = document.getElementById("Menu");
menuBtn.addEventListener("click", () => {
  removeAllContent();
  menuPage(container);
});
const contactBtn = document.getElementById("Contact");
contactBtn.addEventListener("click", () => {
  removeAllContent();
  contactPage(container);
});

function removeAllContent() {
  const pageContainer = document.querySelector(".page-content");
  container.removeChild(pageContainer);
}
