import menuPage from "./menuPage";
import startPage from "./startPage";
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
for (const value of buttonValues) {
  const button = document.createElement("button");
  button.classList.add("section-button");
  button.textContent = value;
  buttonContainer.appendChild(button);
}
// startPage(container);
menuPage(container);
